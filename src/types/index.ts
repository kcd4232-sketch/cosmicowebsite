export interface Qualification {
  id: string;
  category: 'license' | 'education' | 'award' | 'activity';
  title: string;
  subtitle?: string;
  year?: number;
  description?: string;
}

export interface Award {
  id: string;
  year: number;
  title: string;
  organization: string;
  category: string;
  medal?: 'gold' | 'silver' | 'bronze' | 'special';
  description?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: 'bbtt' | 'headspa' | 'plasma' | 'seminar' | 'international';
  date: string;
  location: string;
  description: string;
  longDescription?: string;
  coverImage: string;
  gallery?: string[];
  tags: string[];
  featured?: boolean;
}

export type BodyZone = 'body' | 'scalp';
export type ScoreLevel = 'low' | 'medium' | 'high';

export interface ZoneScore {
  score: number;
  maxPossible: number;
  level: ScoreLevel;
}

export interface ZoneRecommendation {
  level: ScoreLevel;
  title: string;
  description: string;
  programs: string[];
}

export interface DiagnosisConcern {
  bodyConcernArea: string;
  scalpConcernArea: string;
}

export interface CustomerInfo {
  name: string;
  phone: string;
}

export interface DiagnosisQuestion {
  id: string;
  step: number;
  zone: BodyZone;
  question: string;
  options: DiagnosisOption[];
}

export interface DiagnosisOption {
  id: string;
  label: string;
  scores: {
    bbtt: number;
    headspa: number;
    plasma: number;
    comprehensive: number;
  };
}

export interface DiagnosisResult {
  type: 'bbtt' | 'headspa' | 'plasma' | 'comprehensive';
  title: string;
  subtitle: string;
  description: string;
  recommendations: string[];
  color: string;
  scores: {
    bbtt: number;
    headspa: number;
    plasma: number;
    comprehensive: number;
  };
}

// ===== 전문가 성장 진단 =====
export type CourseTrack = 'bbtt' | 'headspa' | 'plasma' | 'instructor' | 'undecided';
export type CourseLevel = 'intro' | 'regular' | 'master';
export type GrowthTone = 'practical' | 'credential' | 'business' | 'instructor' | 'consultation';
export type GrowthIntent = 'enroll' | 'inquiry' | 'browse' | 'instructor-path';

export interface GrowthTrackScores {
  bbtt: number;
  headspa: number;
  plasma: number;
  instructor: number;
}

export interface GrowthOption {
  id: string;
  label: string;
  trackScores: GrowthTrackScores;
  toneHint?: GrowthTone;
  levelHint?: CourseLevel;
  intent?: GrowthIntent;
}

export interface GrowthQuestion {
  id: string;
  step: number;
  question: string;
  helperText?: string;
  options: GrowthOption[];
}

export interface GrowthRecommendation {
  id: string;
  track: CourseTrack;
  level: CourseLevel | 'any';
  title: string;
  subtitle: string;
  description: string;
  programs: string[];
  openingByTone: Record<GrowthTone, string>;
}

export interface GrowthResult {
  track: CourseTrack;
  level: CourseLevel | 'any';
  tone: GrowthTone;
  intent: GrowthIntent;
  totals: GrowthTrackScores;
  courseId: string;
}
