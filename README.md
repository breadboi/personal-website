# Personal Website

Website created with the intent of learning new technologies and serving as my personal portfolio.

## Requirements

- NPM
- Golang
- config.json ( For config.go )

## config.json
```
{
  "github-secrets": {
        "personal-read": "github-token"
    },
  "port" : <port>,
  "mode" : <debug/release>
}
```

## Startup

### Start Frontend
```bash
npm run dev
```
### Build and Run Backend
```bash
cd Backend ; go build ./... ; ./portfolio-backend
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
