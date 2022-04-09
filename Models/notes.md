# Models

- user
- hotel (location id)
- location (trip id)
- restaurant (location id, restaurant id)
- comment (comment, user id, comment id, trip id)
- trip

# Associations

- trip (joining table)
  - hotel id
  - location id
  - restaurant id
  - user id
  - comment ids
- user
  - trips
  - comment
- location
  - hotel
  - restaurant
