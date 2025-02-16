export interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  showSideBar: boolean;
  setShowSideBar: (showSideBar: boolean) => void;
}

export interface ProjectType {
  id: number;
  image_url: string;
  title: string;
  type: string;
  description: string;
  tech_stack: string[];
  preview_link: string;
}

export interface ProjectContextType {
  projects: ProjectType[];
  selectedProject: ProjectType | null;
  setSelectedProject: (project: ProjectType | null) => void;
}

export interface TechStackType {
  img_url: string;
  title: string;
  details: string[];
}

export interface SkillCardProps {
  tech: TechStackType;
}

export interface SkillModalProps {
  tech: SkillCardProps["tech"];
  onClose: () => void;
}
