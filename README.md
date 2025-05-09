# AI Resume Builder

An AI-powered resume builder application that helps users create professional resumes, get AI-powered suggestions, and optimize their resumes for job applications.

## Features

- **User Authentication**: Register, login, and manage your account
- **Resume Creation**: Create and edit professional resumes with multiple templates
- **AI Integration**:
  - Generate job descriptions based on job titles and industries
  - Analyze resumes against job descriptions for optimization
  - Get AI-powered suggestions to improve your resume
- **Resume Import**: Upload existing resumes in PDF or DOCX format for editing
- **Export Options**: Download your resume in PDF or DOCX format
- **Preview**: Preview your resume before downloading

## Tech Stack

### Frontend
- Next.js (React)
- Tailwind CSS
- React-to-PDF for PDF generation

### Backend
- Node.js with Express
- MongoDB for database
- JWT for authentication
- OpenAI API for AI features

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd resume-builder
```

2. Install dependencies for both frontend and backend:
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Set up environment variables:

Create a `.env` file in the server directory:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/resume-builder
JWT_SECRET=your_jwt_secret_key_here
OPENAI_API_KEY=your_openai_api_key_here
NODE_ENV=development
```

Create a `.env.local` file in the client directory:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

4. Start the development servers:

For the backend:
```bash
cd server
npm run dev
```

For the frontend:
```bash
cd client
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
resume-builder/
├── client/                  # Frontend React application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── context/         # State management
│   │   ├── hooks/           # Custom hooks
│   │   ├── services/        # API services
│   │   ├── styles/          # CSS/Tailwind styles
│   │   └── utils/           # Utility functions
│   └── package.json
│
├── server/                  # Backend Node.js application
│   ├── controllers/         # Request handlers
│   ├── models/              # Database models
│   ├── routes/              # API routes
│   ├── services/            # Business logic
│   ├── utils/               # Utility functions
│   ├── middleware/          # Custom middleware
│   ├── ai/                  # AI integration modules
│   └── package.json
│
└── README.md                # Project documentation
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `GET /api/auth/me` - Get current user

### Resumes
- `GET /api/resumes` - Get all resumes for a user
- `GET /api/resumes/:id` - Get a single resume
- `POST /api/resumes` - Create a new resume
- `PUT /api/resumes/:id` - Update a resume
- `DELETE /api/resumes/:id` - Delete a resume

### Templates
- `GET /api/templates` - Get all templates
- `GET /api/templates/:name` - Get a single template

### AI
- `POST /api/ai/generate-job-description` - Generate a job description
- `POST /api/ai/analyze-resume` - Analyze a resume against a job description
- `POST /api/ai/parse-upload` - Parse an uploaded resume

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenAI for providing the AI capabilities
- Next.js and React for the frontend framework
- Express and Node.js for the backend framework
