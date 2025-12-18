import { Search } from 'lucide-react';
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SearchBar = ({ onSearch, loading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) onSearch(input);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto mb-8 border-none shadow-md bg-white/80 backdrop-blur">
      <CardContent className="p-2">
        <form onSubmit={handleSubmit} className="flex gap-2 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input
              type="url"
              placeholder="https://example.com"
              className="pl-10 h-12 text-lg border-0 shadow-none focus-visible:ring-0 bg-transparent"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              required
            />
          </div>
          <Button 
            type="submit" 
            size="lg" 
            disabled={loading}
            className="h-10 px-6 font-semibold bg-blue-600 hover:bg-blue-700"
          >
            {loading ? "Scanning..." : "Analyze"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SearchBar;