Need to set up secret keys. First create a file config/secrets.yml with the following contents:

```
development:
  secret\_key\_base:

test:
  secret\_key\_base:

production:
  secret\_key\_base: <%= ENV["SECRET_KEY_BASE"] %>
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
