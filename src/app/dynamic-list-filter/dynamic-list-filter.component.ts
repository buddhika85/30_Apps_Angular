import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-list-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dynamic-list-filter.component.html',
  styleUrl: './dynamic-list-filter.component.scss',
})
export class DynamicListFilterComponent {
  typedString: string = '';
  tutorialsList: string[] = [
    'Angular Tutorial',
    'React Tutorial',
    'Vue.js Tutorial',
    'JavaScript Basics',
    'TypeScript Fundamentals',
    'Building with HTML & CSS',
    'Introduction to Node.js',
    'Getting Started with MongoDB',
    'Web Development with Node.js',
    'Advanced JavaScript Concepts',
    'Mastering Angular',
    'Learning CSS Grid',
    'Node.js for Beginners',
    'The Complete JavaScript Guide',
    'CSS Flexbox in Depth',
    'Getting Started with Express.js',
    'Deep Dive into GraphQL',
    'Modern Web Development Trends',
    'Building REST APIs with Express',
    'Introduction to Git and GitHub',
    'Web Accessibility Essentials',
  ];

  tutorialsDisplayList: string[] = [];

  constructor() {
    this.prepareDisplayList();
  }

  onChange() {
    //console.log(this.typedString);
    this.prepareDisplayList();
  }

  selectItem(selectedItem: string) {
    this.typedString = selectedItem;
    this.tutorialsDisplayList.length = 0;
    this.tutorialsDisplayList.push(selectedItem);
  }

  private prepareDisplayList() {
    // makes the display array empty
    this.tutorialsDisplayList.length = 0;

    // filtering logic
    this.tutorialsList.forEach((item) => {
      if (item.toLowerCase().includes(this.typedString.toLowerCase())) {
        this.tutorialsDisplayList.push(item);
      }
    });
  }
}
