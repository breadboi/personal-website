# Personal Website

Website created with the intent of learning new technologies.

## Requirements

- NPM
- Golang
- config.json ( For config.go )

## config.json
```
{
  "github-secrets": {
        "personal-read": "github-token"
    }
  "port" : <port>,
  "mode" : <debug/release>
}
```

## Startup

```bash
> npm install
> npx gulp build-release
> go run *.go
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
