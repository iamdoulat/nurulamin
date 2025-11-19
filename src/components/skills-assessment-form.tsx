'use client';

import { useState } from 'react';
import { Wand2 } from 'lucide-react';

import { skillsSelfAssessment } from '@/ai/flows/skills-self-assessment';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';

export function SkillsAssessmentForm() {
  const [experience, setExperience] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuggestions('');
    setError('');

    try {
      const result = await skillsSelfAssessment({ experience });
      setSuggestions(result.suggestions);
    } catch (err) {
      setError('An error occurred while generating suggestions. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Your Experience</CardTitle>
          <CardDescription>
            Provide a detailed description of your professional and academic experience below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Label htmlFor="experience" className="sr-only">
            Your Experience
          </Label>
          <Textarea
            id="experience"
            name="experience"
            rows={10}
            placeholder="e.g., 'I am a frontend developer with 3 years of experience in React and TypeScript...'"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          />
        </CardContent>
        <CardFooter className="flex flex-col items-stretch gap-4">
          <Button type="submit" disabled={loading}>
            {loading ? 'Analyzing...' : 'Get Suggestions'}
            {!loading && <Wand2 className="ml-2 h-4 w-4" />}
          </Button>

          {suggestions && (
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle>Development Suggestions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-line">{suggestions}</p>
              </CardContent>
            </Card>
          )}

          {error && <p className="text-sm font-medium text-destructive">{error}</p>}
        </CardFooter>
      </form>
    </Card>
  );
}
