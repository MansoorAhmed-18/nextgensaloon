DROP POLICY "Anyone can create a booking" ON public.bookings;
CREATE POLICY "Anyone can create a booking" ON public.bookings FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(name) BETWEEN 1 AND 120
  AND char_length(phone) BETWEEN 6 AND 20
  AND (email IS NULL OR char_length(email) <= 255)
  AND char_length(service) BETWEEN 1 AND 120
  AND (message IS NULL OR char_length(message) <= 1000)
  AND (location IS NULL OR char_length(location) <= 120)
);

DROP POLICY "Anyone can send a message" ON public.contact_messages;
CREATE POLICY "Anyone can send a message" ON public.contact_messages FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(name) BETWEEN 1 AND 120
  AND char_length(email) BETWEEN 3 AND 255
  AND (phone IS NULL OR char_length(phone) <= 20)
  AND char_length(message) BETWEEN 1 AND 2000
);