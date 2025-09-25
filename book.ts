import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Interfaces
interface Review {
  rating: number;
  text: string;
}

interface Book {
  name: string;
  rating: number;
  reviews: Review[];
  pdf:string;
}

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book.html',
  styleUrls: ['./book.scss']
})
export class BookComponent {
  book: Book | undefined;
  newRating: number = 0;
  newReview: string = '';

  books: Book[] = [
    {
      name: 'Wings of Fire',
      rating: 4.5,
      reviews: [
        { rating: 5, text: 'Amazing story of following dreams.' },
        { rating: 4, text: 'A life-changing book!' }
      ],
      pdf: '/books/wings-of-fire.pdf'  
    },
    {
      name: 'Atomic Habits',
      rating: 4.8,
      reviews: [
        { rating: 5, text: 'Practical tips to build good habits.' }
      ],pdf: '/books/wings-of-fire.pdf' 
    },
    {
      name: 'Rich Dad Poor Dad',
      rating: 4.2,
      reviews: [
        { rating: 4, text: 'Great lessons about money mindset.' }
      ],pdf: '/books/wings-of-fire.pdf' 
    }
  ];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.book = this.books[id];
  }

  submitFeedback(): void {
    if (this.book && this.newRating && this.newReview.trim()) {
      // Add new review
      this.book.reviews.push({
        rating: this.newRating,
        text: this.newReview
      });

      // Update average rating
      const total = this.book.reviews.reduce(
        (sum: number, r: Review) => sum + r.rating,
        0
      );
      this.book.rating = total / this.book.reviews.length;

      // Reset form
      this.newRating = 0;
      this.newReview = '';
    }
  }
}
