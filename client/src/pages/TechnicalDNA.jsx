import { Globe, Cpu } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export const TechnicalDNA = ({ domain, urlStructure }) => {
  return (
    <Card className="shadow-md border-t-4 border-t-slate-800">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Cpu className="w-5 h-5 text-slate-800" />
          Technical Metadata
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Registrar</span>
          <span className="font-semibold truncate max-w-[120px]">{domain?.registrar}</span>
        </div>
        <Separator />
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Domain Age</span>
          <span className="font-semibold">{domain?.ageDays} Days</span>
        </div>
        <Separator />
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">URL Length Risk</span>
          <Badge variant="secondary" className="text-[10px]">{urlStructure?.lengthRisk}</Badge>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">IP-Based Host</span>
          <span className="font-semibold">{urlStructure?.ipBased ? 'Yes' : 'No'}</span>
        </div>
      </CardContent>
    </Card>
  );
};