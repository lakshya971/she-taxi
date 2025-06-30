# SheTaxi Project

## Overview
SheTaxi is a ride-hailing application designed to provide safe and reliable transportation services, specifically catering to women. The application connects passengers with drivers, ensuring a secure and efficient ride experience.

## Features
- User registration and authentication
- Profile management for users and drivers
- Ride request creation and management
- Payment processing and history tracking
- Location services for accurate ride tracking
- Notification system for updates and alerts

## Project Structure
```
shetaxi-backend
├── src
│   ├── config
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   ├── types
│   └── app.ts
├── tests
│   ├── unit
│   └── integration
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/shetaxi-backend.git
   ```
2. Navigate to the project directory:
   ```
   cd shetaxi-backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Configuration
- Ensure to set up your environment variables in a `.env` file based on the configurations defined in `src/config/environment.ts`.

## Running the Application
To start the application, run:
```
npm start
```

## Testing
To run the tests, use:
```
npm test
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.