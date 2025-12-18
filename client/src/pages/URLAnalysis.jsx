import { Link2, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const URLAnalysis = ({ structure }) => {
  const getRiskColor = (risk) => risk === 'High' ? 'text-red-600' : 'text-green-600';

  return (
    <Card className="shadow-lg border-t-4 border-t-orange-500 animate-in fade-in slide-in-from-right duration-700">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Link2 className="w-5 h-5 text-orange-500" /> Link Architecture
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {[
          { label: 'Length Risk', val: structure?.lengthRisk },
          { label: 'Character Risk', val: structure?.specialCharRisk },
          { label: 'Subdomain Risk', val: structure?.subdomainRisk }
        ].map((item) => (
          <div key={item.label} className="flex justify-between text-sm border-b pb-2">
            <span className="text-slate-500">{item.label}</span>
            <span className={`font-bold ${getRiskColor(item.val)}`}>{item.val}</span>
          </div>
        ))}
        <div className="flex justify-between text-sm pt-1">
          <span className="text-slate-500">IP-Based URL</span>
          <Badge variant={structure?.ipBased ? "destructive" : "outline"}>
            {structure?.ipBased ? 'Suspicious' : 'Standard'}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};