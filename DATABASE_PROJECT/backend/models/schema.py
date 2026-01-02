{
  "tables": [
    {
      "id": "users",
      "name": "users",
      "columns": [
        { "name": "id", "type": "uuid", "pk": true },
        { "name": "email", "type": "varchar", "unique": true },
        { "name": "password", "type": "varchar" }
      ]
    }
  ],
  "relations": [
    {
      "from": "users.id",
      "to": "orders.user_id",
      "type": "one-to-many"
    }
  ]
}
