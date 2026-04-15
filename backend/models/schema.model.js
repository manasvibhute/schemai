export const mockSchema = (prompt = '') => ({
  nodes: [
    {
      id: 'users',
      type: 'default',
      position: { x: 100, y: 100 },
      data: {
        name: 'users',
        columns: [
          { name: 'id', type: 'uuid', primary: true },
          { name: 'email', type: 'varchar' },
          { name: 'password', type: 'varchar' }
        ]
      }
    },
    {
      id: 'posts',
      type: 'default',
      position: { x: 400, y: 100 },
      data: {
        name: 'posts',
        columns: [
          { name: 'id', type: 'uuid', primary: true },
          { name: 'user_id', type: 'uuid', foreign: 'users.id' },
          { name: 'title', type: 'varchar' }
        ]
      }
    }
  ],
  edges: [
    {
      id: 'users-posts',
      source: 'users',
      target: 'posts'
    }
  ]
});
