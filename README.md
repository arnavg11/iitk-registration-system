# iitk-registration-system
This is a registration site for IITK facilities.

To access it, open index.html

Features:
  1. from login, if the user enters a password that matches the data, he will be directly forwarded to the booking page.
  Otherwise, the user can go to the register page.
  
  2. In the booking page, the slot number is the time of the day, the user wants to enter to play for one hour.
  
  3. "check availability" shows the roll no of the people who have already registered for that game at that time.
  
  4. "book slot" gives an alert stating whether the slot is available or not(if there are more bookings in that slot than its capacity, which is taken as 3 here) and books the slot if it is free.

  5. a button in the top right corner "View History" shows the user's history(all his bookings)

Here OOPs has been used to keep track of each user's data as well as to keep track of bookings.

PS: due to limitations like not being very familiar with node, I was unable to store all the data in a file, allowing the bookings to persist even after the site is closed. Instead, I have had to use local storage. Different accounts and reservations to check the logic will have to be manually added in index.html where data is initialized.
