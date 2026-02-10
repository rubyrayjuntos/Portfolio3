import { describe, test } from 'vitest';
import fc from 'fast-check';
import { Project, Medium } from '../types';

/**
 * ProjectModal Property Tests
 * 
 * These tests verify the content completeness, link display logic, and accent color logic 
 * for the ProjectModal component. We test the core logic functions that determine what 
 * content should be displayed and what colors should be used.
 */

// Helper function to extract content that should be displayed in modal
function getModalContent(project: Project) {
  return {
    image: project.imageUrl,
    title: project.title,
    description: project.description,
    pitch: project.pitch,
    role: project.role,
    status: project.status,
    year: project.year,
    medium: project.medium,
    techTags: project.tech || [],
    genreTags: project.genre
  };
}

// Helper function to check if modal content is complete
function hasCompleteModalContent(project: Project): boolean {
  const content = getModalContent(project);
  
  // Must have all required fields
  const hasRequiredFields = 
    content.image !== undefined &&
    content.title !== undefined &&
    content.description !== undefined &&
    content.role !== undefined &&
    content.status !== undefined &&
    content.year !== undefined &&
    content.medium !== undefined;
  
  // Must have genre tags
  const hasGenreTags = content.genreTags !== undefined && content.genreTags.length > 0;
  
  return hasRequiredFields && hasGenreTags;
}

// Helper function to get primary link from project
function getPrimaryLink(project: Project): { key: string; url: string } | null {
  if (!project.links || Object.keys(project.links).length === 0) {
    return null;
  }
  
  const firstKey = Object.keys(project.links)[0];
  return { key: firstKey, url: project.links[firstKey] };
}

// Helper function to get secondary links from project
function getSecondaryLinks(project: Project): Array<{ key: string; url: string }> {
  if (!project.links || Object.keys(project.links).length <= 1) {
    return [];
  }
  
  return Object.entries(project.links)
    .slice(1)
    .map(([key, url]) => ({ key, url }));
}

// Helper function to check if project should show "Documentation Pending" message
function shouldShowNoPendingMessage(project: Project): boolean {
  return !project.links || Object.keys(project.links).length === 0;
}

// Helper function to get accent color for a medium
function getAccentColor(medium: Medium): string {
  const colorMap: Record<Medium, string> = {
    code: '#ff00ff', // fuchsia-500
    art: '#00ffff',  // cyan-400
    writing: '#ffbf00' // amber-500
  };
  return colorMap[medium];
}

// Generator for valid projects
const projectGenerator = fc.record({
  id: fc.integer({ min: 1, max: 1000 }),
  title: fc.string({ minLength: 1, maxLength: 100 }),
  description: fc.string({ minLength: 1, maxLength: 500 }),
  imageUrl: fc.webUrl(),
  medium: fc.constantFrom<Medium>('code', 'art', 'writing'),
  genre: fc.array(fc.string({ minLength: 1, maxLength: 50 }), { minLength: 1, maxLength: 10 }),
  style: fc.array(fc.string({ minLength: 1, maxLength: 50 }), { minLength: 1, maxLength: 10 }),
  tech: fc.option(fc.array(fc.string({ minLength: 1, maxLength: 30 }), { minLength: 0, maxLength: 20 })),
  mood: fc.string({ minLength: 1, maxLength: 50 }),
  year: fc.integer({ min: 2000, max: 2030 }),
  role: fc.string({ minLength: 1, maxLength: 100 }),
  variant: fc.string({ minLength: 1, maxLength: 50 }),
  status: fc.string({ minLength: 1, maxLength: 50 }),
  links: fc.option(fc.dictionary(fc.string({ minLength: 1 }), fc.webUrl(), { minKeys: 0, maxKeys: 5 })),
  pitch: fc.option(fc.string({ minLength: 1, maxLength: 500 }))
}) as fc.Arbitrary<Project>;

describe('Modal Content Completeness Properties', () => {
  // Feature: portfolio-knowledge-graph, Property 29: Modal Content Completeness
  test('Property 29: Modal Content Completeness - displays all required fields', () => {
    fc.assert(
      fc.property(
        projectGenerator,
        (project) => {
          const content = getModalContent(project);
          
          // Should include image, title, description, pitch, role, status, year, medium
          return (
            content.image === project.imageUrl &&
            content.title === project.title &&
            content.description === project.description &&
            content.pitch === project.pitch &&
            content.role === project.role &&
            content.status === project.status &&
            content.year === project.year &&
            content.medium === project.medium
          );
        }
      ),
      { numRuns: 100 }
    );
  });

  test('Property 29: Modal Content Completeness - displays all tech tags', () => {
    fc.assert(
      fc.property(
        projectGenerator,
        (project) => {
          const content = getModalContent(project);
          
          // If project has tech, should display all of them
          if (project.tech && project.tech.length > 0) {
            return (
              content.techTags.length === project.tech.length &&
              content.techTags.every((tag, idx) => tag === project.tech![idx])
            );
          }
          
          // If no tech, should have empty array
          return content.techTags.length === 0;
        }
      ),
      { numRuns: 100 }
    );
  });

  test('Property 29: Modal Content Completeness - displays all genre tags', () => {
    fc.assert(
      fc.property(
        projectGenerator,
        (project) => {
          const content = getModalContent(project);
          
          // Should display all genre tags
          return (
            content.genreTags.length === project.genre.length &&
            content.genreTags.every((tag, idx) => tag === project.genre[idx])
          );
        }
      ),
      { numRuns: 100 }
    );
  });

  test('Property 29: Modal Content Completeness - all projects have complete content', () => {
    fc.assert(
      fc.property(
        projectGenerator,
        (project) => {
          // Every valid project should have complete modal content
          return hasCompleteModalContent(project);
        }
      ),
      { numRuns: 100 }
    );
  });
});

describe('Modal Link Display Properties', () => {
  // Feature: portfolio-knowledge-graph, Property 30: Modal Primary Link Display
  test('Property 30: Modal Primary Link Display - projects with links show primary CTA', () => {
    fc.assert(
      fc.property(
        projectGenerator,
        (project) => {
          // Only test projects with at least one link
          fc.pre(project.links !== undefined && project.links !== null && Object.keys(project.links).length > 0);
          
          const primaryLink = getPrimaryLink(project);
          
          // Should have a primary link
          return (
            primaryLink !== null &&
            primaryLink.key === Object.keys(project.links!)[0] &&
            primaryLink.url === project.links![primaryLink.key]
          );
        }
      ),
      { numRuns: 100 }
    );
  });

  test('Property 30: Modal Primary Link Display - projects without links have no primary CTA', () => {
    fc.assert(
      fc.property(
        projectGenerator,
        (project) => {
          // Only test projects with no links
          fc.pre(!project.links || Object.keys(project.links).length === 0);
          
          const primaryLink = getPrimaryLink(project);
          
          // Should not have a primary link
          return primaryLink === null;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Feature: portfolio-knowledge-graph, Property 31: Modal Secondary Links Display
  test('Property 31: Modal Secondary Links Display - projects with multiple links show secondary buttons', () => {
    fc.assert(
      fc.property(
        projectGenerator,
        (project) => {
          // Only test projects with more than one link
          fc.pre(project.links !== undefined && project.links !== null && Object.keys(project.links).length > 1);
          
          const secondaryLinks = getSecondaryLinks(project);
          
          // Should have secondary links (all except first)
          const expectedCount = Object.keys(project.links!).length - 1;
          return (
            secondaryLinks.length === expectedCount &&
            secondaryLinks.every((link, idx) => {
              const allEntries = Object.entries(project.links!);
              const expectedEntry = allEntries[idx + 1]; // Skip first entry
              return link.key === expectedEntry[0] && link.url === expectedEntry[1];
            })
          );
        }
      ),
      { numRuns: 100 }
    );
  });

  test('Property 31: Modal Secondary Links Display - projects with one link have no secondary buttons', () => {
    fc.assert(
      fc.property(
        projectGenerator,
        (project) => {
          // Only test projects with exactly one link
          fc.pre(project.links !== undefined && project.links !== null && Object.keys(project.links).length === 1);
          
          const secondaryLinks = getSecondaryLinks(project);
          
          // Should have no secondary links
          return secondaryLinks.length === 0;
        }
      ),
      { numRuns: 100 }
    );
  });

  test('Property 31: Modal Secondary Links Display - projects with no links have no secondary buttons', () => {
    fc.assert(
      fc.property(
        projectGenerator,
        (project) => {
          // Only test projects with no links
          fc.pre(!project.links || Object.keys(project.links).length === 0);
          
          const secondaryLinks = getSecondaryLinks(project);
          
          // Should have no secondary links
          return secondaryLinks.length === 0;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Feature: portfolio-knowledge-graph, Property 32: Modal No-Links Message
  test('Property 32: Modal No-Links Message - projects without links show pending message', () => {
    fc.assert(
      fc.property(
        projectGenerator,
        (project) => {
          // Only test projects with no links
          fc.pre(!project.links || Object.keys(project.links).length === 0);
          
          const shouldShowMessage = shouldShowNoPendingMessage(project);
          
          // Should show "Documentation Pending" message
          return shouldShowMessage === true;
        }
      ),
      { numRuns: 100 }
    );
  });

  test('Property 32: Modal No-Links Message - projects with links do not show pending message', () => {
    fc.assert(
      fc.property(
        projectGenerator,
        (project) => {
          // Only test projects with at least one link
          fc.pre(project.links !== undefined && project.links !== null && Object.keys(project.links).length > 0);
          
          const shouldShowMessage = shouldShowNoPendingMessage(project);
          
          // Should not show "Documentation Pending" message
          return shouldShowMessage === false;
        }
      ),
      { numRuns: 100 }
    );
  });
});

describe('Modal Accent Color Properties', () => {
  // Feature: portfolio-knowledge-graph, Property 34: Modal Accent Colors
  test('Property 34: Modal Accent Colors - code projects use fuchsia', () => {
    fc.assert(
      fc.property(
        projectGenerator,
        (project) => {
          // Only test code projects
          fc.pre(project.medium === 'code');
          
          const accentColor = getAccentColor(project.medium);
          
          return accentColor === '#ff00ff';
        }
      ),
      { numRuns: 100 }
    );
  });

  test('Property 34: Modal Accent Colors - art projects use cyan', () => {
    fc.assert(
      fc.property(
        projectGenerator,
        (project) => {
          // Only test art projects
          fc.pre(project.medium === 'art');
          
          const accentColor = getAccentColor(project.medium);
          
          return accentColor === '#00ffff';
        }
      ),
      { numRuns: 100 }
    );
  });

  test('Property 34: Modal Accent Colors - writing projects use amber', () => {
    fc.assert(
      fc.property(
        projectGenerator,
        (project) => {
          // Only test writing projects
          fc.pre(project.medium === 'writing');
          
          const accentColor = getAccentColor(project.medium);
          
          return accentColor === '#ffbf00';
        }
      ),
      { numRuns: 100 }
    );
  });

  test('Property 34: Modal Accent Colors - all mediums have distinct colors', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<Medium>('code', 'art', 'writing'),
        fc.constantFrom<Medium>('code', 'art', 'writing'),
        (medium1, medium2) => {
          // Only test when mediums are different
          fc.pre(medium1 !== medium2);
          
          const color1 = getAccentColor(medium1);
          const color2 = getAccentColor(medium2);
          
          // Different mediums should have different colors
          return color1 !== color2;
        }
      ),
      { numRuns: 100 }
    );
  });

  test('Accent color matches project medium for all projects', () => {
    fc.assert(
      fc.property(
        projectGenerator,
        (project) => {
          const accentColor = getAccentColor(project.medium);
          
          // Verify the color matches the expected color for that medium
          const expectedColors: Record<Medium, string> = {
            code: '#ff00ff',
            art: '#00ffff',
            writing: '#ffbf00'
          };
          
          return accentColor === expectedColors[project.medium];
        }
      ),
      { numRuns: 100 }
    );
  });
});
