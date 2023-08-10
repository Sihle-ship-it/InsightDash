import { Component, OnInit } from '@angular/core';
import { Order } from '../../Models/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit{
  orders:Order[] = [
    {
      id: 1,
      customer: {
        id: 1,
        name: 'Main St Bakery',
        state: 'CO',
        email: 'mainst@example.com'
      },
      total: 230,
      placed: new Date(2023, 8, 10),
      fulfilled: new Date(2023, 8, 10),
      status: 'Completed'
    },{
      id: 2,
      customer: {
        id: 2,
        name: 'South Ave Diner',
        state: 'FL',
        email: 'southave@example.com'
      },
      total: 180,
      placed: new Date(2023, 7, 14),
      fulfilled: new Date(2023, 7, 20),
      status: 'Pending'
    },
    {
      id: 3,
      customer: {
        id: 3,
        name: 'Lakeside Eats',
        state: 'NY',
        email: 'lakeside@example.com'
      },
      total: 205,
      placed: new Date(2023, 6, 22),
      fulfilled: new Date(2023, 6, 25),
      status: 'Completed'
    },
    {
      id: 4,
      customer: {
        id: 4,
        name: 'Downtown Deli',
        state: 'TX',
        email: 'downtown@example.com'
      },
      total: 190,
      placed: new Date(2023, 5, 18),
      fulfilled: new Date(2023, 5, 23),
      status: 'In Process'
    },
    {
      id: 5,
      customer: {
        id: 5,
        name: 'Hilltop Cafe',
        state: 'GA',
        email: 'hilltop@example.com'
      },
      total: 220,
      placed: new Date(2023, 7, 10),
      fulfilled: new Date(2023, 7, 14),
      status: 'Completed'
    },
    {
      id: 6,
      customer: {
        id: 6,
        name: 'Valley Foods',
        state: 'CA',
        email: 'valley@example.com'
      },
      total: 240,
      placed: new Date(2023, 4, 11),
      fulfilled: new Date(2023, 4, 15),
      status: 'Pending'
    },
    {
      id: 7,
      customer: {
        id: 7,
        name: 'Meadow Sweets',
        state: 'MI',
        email: 'meadow@example.com'
      },
      total: 195,
      placed: new Date(2023, 9, 5),
      fulfilled: new Date(2023, 9, 9),
      status: 'In Process'
    },
    {
      id: 8,
      customer: {
        id: 8,
        name: 'Central Bites',
        state: 'OH',
        email: 'central@example.com'
      },
      total: 210,
      placed: new Date(2023, 2, 7),
      fulfilled: new Date(2023, 2, 11),
      status: 'Completed'
    },
    {
      id: 9,
      customer: {
        id: 9,
        name: 'Harbor Eatery',
        state: 'WA',
        email: 'harbor@example.com'
      },
      total: 225,
      placed: new Date(2023, 1, 20),
      fulfilled: new Date(2023, 1, 24),
      status: 'Pending'
    }
  ];

  constructor(){}
  ngOnInit(): void {
      
  }
}
