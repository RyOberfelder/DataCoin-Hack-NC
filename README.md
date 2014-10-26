Need to set up secret keys. First create a file config/secrets.yml with the following contents:

```ruby
development:
  secret_key_base:

test:
  secret_key_base:

production:
  secret_key_base: <%= ENV["SECRET_KEY_BASE"] %>
```

Make sure you generate new secret keys with

```
    rake secret
```

Must have Postgres installed and running.
Run

```
    rake db:migrate
```
to correctly set the database up and

```
    rails s
```
to deploy locally.
