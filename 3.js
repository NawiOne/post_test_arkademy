const query = "SELECT name, (rides.distance*rides.fare) AS distance_total  FROM users JOIN rides ON users.id = rides.user_id ORDER BY distance_total DESC";
