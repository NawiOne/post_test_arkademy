const query = "SELECT name, (rides.distance*rides.fare) FROM users JOIN rides ON users.id = rides.user_id LIMIT 10 ORDER ASC";
