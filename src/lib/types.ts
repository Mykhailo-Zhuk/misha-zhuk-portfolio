export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string | null;
  demo: string | null;
  featured: boolean;
  metrics: Array<{ label: string; value: string }>;
}