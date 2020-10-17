const query = "SELECT name, rides.distance AS distance_traveled, (rides.distance*rides.fare) AS total_fares FROM users JOIN rides ON users.id = rides.user_id ORDER BY total_fares DESC LIMIT 10";
