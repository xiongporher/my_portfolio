# Email Setup Instructions

Your contact form is now configured to send emails to **xiongporher1@gmail.com**.

## Setup Steps:

### 1. Install Resend (Optional - for production)

The API route is ready to use Resend, a modern email API service.

If you want to use Resend:

```bash
bun add resend
```

### 2. Get API Key from Resend

1. Go to https://resend.com
2. Sign up for a free account
3. Go to API Keys section
4. Create a new API key
5. Copy the API key

### 3. Add API Key to .env.local

Open `.env.local` and replace `your_resend_api_key_here` with your actual API key:

```
RESEND_API_KEY=re_your_actual_api_key_here
```

### 4. Restart Development Server

After adding the API key, restart your development server:

```bash
bun run dev
```

## Alternative: Use EmailJS (No Backend Required)

If you prefer a simpler setup without API keys, you can use EmailJS:

1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Add an email service (Gmail)
4. Create an email template
5. Get your Public Key, Service ID, and Template ID
6. I can help you update the Contact component to use EmailJS instead

## Testing

Once configured, fill out the contact form on your portfolio and submit it. You should receive an email at xiongporher1@gmail.com with the form details.

## Free Tier Limits

- **Resend**: 100 emails/day free
- **EmailJS**: 200 emails/month free

Choose the option that works best for you!
