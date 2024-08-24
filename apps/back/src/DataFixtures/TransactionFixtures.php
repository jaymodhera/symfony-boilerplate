<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\Transactions;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class TransactionFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $transactions = [
            [
                'paymentLabel' => 'BK0012SB-45',
                'amount' => 15.4,
                'location' => null,
                'latitude' => '23.0411062',
                'longitude' => '72.4959569',
                'date' => new DateTime(),
            ],
            [
                'paymentLabel' => 'MDS01E-SBR2',
                'amount' => 20.2,
                'location' => null,
                'latitude' => '23.0249759',
                'longitude' => '72.5298038',
                'date' => new DateTime(),
            ],
            [
                'paymentLabel' => 'SUB1541THL',
                'amount' => 45.6,
                'location' => null,
                'latitude' => '23.0693738',
                'longitude' => '72.6515335',
                'date' => new DateTime(),
            ]
        ];

        foreach ($transactions as $transactionData) {
            $transaction = new Transactions();

            $transaction->setPaymentLabel($transactionData['paymentLabel']);
            $transaction->setAmount($transactionData['amount']);
            $transaction->setLocation($transactionData['location']);
            $transaction->setLatitude($transactionData['latitude']);
            $transaction->setLongitude($transactionData['longitude']);
            $transaction->setDate($transactionData['date']);
            $manager->persist($transaction);
        }
        
        $manager->flush();
    }
}
