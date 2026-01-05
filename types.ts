
export enum View {
  Dashboard = 'dashboard',
  Activities = 'activities',
  CourseInfo = 'course-info',
  Resources = 'resources',
  ProceresAI = 'proceres-ai',
  TeacherPortal = 'teacher-portal'
}

export interface User {
  name: string;
  email: string;
  role: 'student' | 'teacher';
}

export interface Activity {
  id: string;
  title: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'delivered' | 'graded';
  grade?: number;
}
