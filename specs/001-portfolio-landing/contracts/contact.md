# API Contracts

## `POST /api/contact`

**Purpose**: Submits contact form data from the footer to the site owner via Resend API.

### Request payload (JSON)

```json
{
  "name": "string (required, min 2 chars)",
  "email": "string (required, valid email format)",
  "message": "string (required, min 10 chars)",
  "honeypot": "string (optional/empty, if filled = reject request)"
}
```

### Responses

#### 200 OK (Success)

```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

#### 400 Bad Request (Validation Error / Honeypot Triggered)

```json
{
  "success": false,
  "error": "Invalid email address or missing fields"
}
```

_(Note: Honeypot triggers should return a 200 OK to the bot to prevent retry, while silently discarding the email)._

#### 500 Internal Server Error (Resend API Failure)

```json
{
  "success": false,
  "error": "Failed to send message properly. Please try again later."
}
```
