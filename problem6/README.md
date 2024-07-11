# Update Score Module

## API Endpoints
1. Increment User Score

Endpoint: POST /api/scores/increment

Request with headers `Authentication: Bearer Token`

Response Example:
```json
{
  "status": "success",
  "score": 100
}

```

Response:

- 200 OK: Score incremented successfully.
- 400 Bad Request: Invalid input.
- 401 Unauthorized: Authentication failed.
- 403 Forbidden.
- 500 Internal Server Error: An error occurred while processing the request.


## Implementation Details

Flow
![Flow](https://raw.githubusercontent.com/henrypham299/pham_quoc_hung/main/problem6/flow.png)

### Authentication and Authorization
- Implement validate access token
- Ensure tokens are have permissions to update the score

### Data Storage
Should be update with the increment direct to column like below
```sql
UPDATE myTable
SET score = score + 1
where user_id = 2
```
### Real-Time Updates
Utilize WebSockets or Server-Sent Events (SSE) to push live updates to the scoreboard with user_id as key.

### Rate Limiting
Implement rate limiting to prevent abuse and ensure fair use of the API.

### Additional Comments
- Error Handling: Ensure comprehensive error handling for all API endpoints to provide meaningful error messages.
- Logging: Implement logging for monitoring API usage and debugging issues.
- Testing: Write unit and integration tests to ensure the reliability of the API.
- Scalability: Consider scalability of the system to handle high traffic, especially for the real-time updates.
- Documentation: Keep the documentation up-to-date with any changes in the API endpoints or implementation details.
