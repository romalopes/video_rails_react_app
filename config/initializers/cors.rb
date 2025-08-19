Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # Allow all origins in development for testing purposes
    # In production, replace '*' with your frontend URL for security
    # Where the frontend is hosted, e.g., "https://your-frontend.com"
    # or use Rails.application.credentials.frontend_url if configured
    # For example, if your frontend is hosted at "https://example.com":
    # Where the request comes from, e.g., "https://example.com"
    # origins "*"  # Replace '*' with your frontend URL in production
    # origins Rails.env.development? ? "*" : Rails.application.credentials.frontend_url
    origins Rails.env.development? ? "https://27.0.0.1:5173" : "https://your-frontend.com"

    resource "*",
      headers: :any,
      methods: [ :get, :post, :put, :patch, :delete, :options, :head ],
      expose: [ "Authorization" ]
  end
end
