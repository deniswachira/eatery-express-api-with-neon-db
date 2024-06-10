-- Insert data into state_table
INSERT INTO state_table (name, code) VALUES
('Kenya', 'KE'),
('Uganda', 'UG'),
('Tanzania', 'TZ'),
('Rwanda', 'RW');

-- Insert data into city_table
INSERT INTO city_table (city_name, state_id) VALUES
('Nairobi', 1),
('Mombasa', 1),
('Kampala', 2),
('Kigali', 4);

-- Insert data into user_table
INSERT INTO user_table (fullname, email, phone, phone_verified, email_verified, confirmation_code) VALUES 
('Denis Wachira', 'denis@example.com', '1234567890', true, true, 1234),
('Brian Kemboi', 'brian@example.com', '254987654321', true, false, 5678),
('Mike Johnson', 'mike.johnson@example.com', '1112223333', false, true, 9012),
('Emily Davis', 'emily.davis@example.com', '4445556666', false, false, 3456);

-- Insert data into address_table
INSERT INTO address_table (street_address_1, street_address_2, zip_code, delivery_instructions, user_id, city_id) VALUES 
('123 Main St', 'Apt 4', '90001', 'Leave at the door', 1, 1),
('456 Elm St', '', '94101', 'Call on arrival', 2, 2),
('789 Oak St', 'Suite 10', '10001', 'Ring the bell', 3, 3),
('321 Pine St', '', '77001', 'Leave with the doorman', 4, 4);

-- Insert data into restaurant_table
INSERT INTO restaurant_table (name, street_address, zip_code, city_id) VALUES 
('Pizza Place', '987 Market St', '90001', 1),
('Sushi Spot', '654 Broadway', '94101', 2),
('BBQ Joint', '321 Fifth Ave', '10001', 3),
('Taco Truck', '111 Sixth St', '77001', 4);

-- Insert data into restaurant_owner_table
INSERT INTO restaurant_owner_table (restaurant_id, owner_id) VALUES 
(1, 3),
(2, 3),
(3, 3),
(4, 3);


-- Insert data into category_table
INSERT INTO category_table (name) VALUES 
('Appetizers'),
('Main Courses'),
('Desserts'),
('Drinks');

-- Insert data into menu_item_table
INSERT INTO menu_item_table (name, price, description, ingredients, restaurant_id, category_id) VALUES 
('Margherita Pizza', 10.99, 'Classic pizza with tomatoes and mozzarella', 'Tomatoes, Mozzarella, Basil', 1, 2),
('California Roll', 12.99, 'Sushi roll with crab and avocado', 'Crab, Avocado, Rice', 2, 2),
('BBQ Ribs', 15.99, 'Tender ribs with BBQ sauce', 'Pork Ribs, BBQ Sauce', 3, 2),
('Fish Tacos', 8.99, 'Tacos with grilled fish and slaw', 'Fish, Slaw, Tortilla', 4, 2);


-- Insert data into driver_table
INSERT INTO driver_table (car_make, car_model, car_year, user_id, online, delivering) VALUES 
('Toyota', 'Camry', 2020, 4, true, false);


-- Insert data into order_table
INSERT INTO order_table (user_id, driver_id, restaurant_id, delivery_address_id, estimated_delivery_time, actual_delivery_time, price, discount, final_price, comment) VALUES 
(1, 1, 1, 1, '2024-06-07 12:00:00', '2024-06-15 12:30:00', 20.00, 2.00, 18.00, 'Leave at the door'),
(2, 1, 2, 2, '2024-06-07 13:00:00', '2024-06-15 13:30:00', 25.00, 3.00, 22.00, 'Call on arrival'),
(3, 1, 3, 3, '2024-06-07 14:00:00', '2024-06-15 14:30:00', 30.00, 5.00, 25.00, 'Ring the bell')

-- Insert data into comment_table
INSERT INTO comment_table (user_id, order_id, comment_text, is_complaint, is_praise) VALUES 
(1, 1, 'Great service!', false, true),
(2, 2, 'Food was late', true, false),
(3, 3, 'Loved the food!', false, true)

-- Insert data into order_menu_table
INSERT INTO order_menu_table (order_id, menu_item_id, quantity, item_price, price, comment) VALUES 
(1, 1, 2, 10.99, 21.98, 'Extra cheese'),
(2, 2, 1, 12.99, 12.99, 'No wasabi'),
(3, 3, 3, 15.99, 47.97, 'Extra sauce')

-- Insert data into order_status_table
INSERT INTO order_status_table (order_id, status_catalog_id) VALUES 
(1, 1),
(2, 2),
(3, 3)

-- Insert data into status_catalog_table
INSERT INTO status_catalog_table (status) VALUES
('Pending'),
('In Progress'),
('Completed'),
('Cancelled');
