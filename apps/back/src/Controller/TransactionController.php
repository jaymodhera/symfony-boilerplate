<?php

declare(strict_types=1);

namespace App\Controller;

use App\Repository\TransactionsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class TransactionController extends AbstractController
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly TransactionsRepository $transactionsRepository,
    ) {
    }
    
    #[Route('/transactions', name: 'transactions', methods: ['GET'])]
    public function listTransactions(): JsonResponse
    {
        $transactions = $this->transactionsRepository->findBy(['user' => $this->getUser()]);
        $responseData = [];

        foreach ($transactions as $transaction) {
            $responseData[] = [
                'id' => $transaction->getId(),
                'code' => $transaction->getPaymentLabel(),
                'amount' => $transaction->getAmount(),
                'location' => $transaction->getLocation(),
                'latitude' => $transaction->getLatitude(),
                'longitude' => $transaction->getLongitude(),
                'datetime' => $transaction->getDate(),
            ];
        }

        return new JsonResponse($responseData);
    }

    #[Route('/transaction/{id}/update', name: 'update_transaction', methods: ['POST'])]
    public function updateTransaction($id, Request $request): JsonResponse
    {
        $transaction = $this->transactionsRepository->find($id);

        if (!$transaction) {
            return new JsonResponse(['status' => 'fail', 'message' => 'Transaction not found!']);    
        }
        $transaction->setLocation($request->request->get('location'));
        $this->entityManager->flush();

        return new JsonResponse(['status' => 'success']);
    }
}
