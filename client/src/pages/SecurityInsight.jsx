import { ShieldAlert, ShieldCheck, Lock, Unlock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const SecurityInsight = ({ reputation, ssl }) => {
  return (
    <Card className="shadow-md border-t-4 border-t-blue-600">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-blue-600" />
          Security Reputation
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Reputation Block */}
        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
          <div>
            <p className="text-sm font-medium text-slate-500">Google Safe Browsing</p>
            <p className="text-xs text-slate-400">{reputation?.source || 'Scanner Offline'}</p>
          </div>
          {reputation?.blacklisted ? (
            <Badge variant="destructive" className="animate-pulse">Blacklisted</Badge>
          ) : (
            <Badge className="bg-green-500 hover:bg-green-600">Clean</Badge>
          )}
        </div>

        {/* Threat Tags */}
        {reputation?.threats?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {reputation.threats.map((threat) => (
              <Badge key={threat} variant="outline" className="text-red-600 border-red-200 bg-red-50 text-[10px]">
                {threat}
              </Badge>
            ))}
          </div>
        )}

        {/* SSL Block */}
        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
          <div className="flex items-center gap-2">
            {ssl?.valid ? <Lock className="w-4 h-4 text-green-600" /> : <Unlock className="w-4 h-4 text-red-600" />}
            <span className="text-sm font-medium">SSL Encryption</span>
          </div>
          <span className="text-xs font-bold text-slate-600">{ssl?.issuer || 'Unknown'}</span>
        </div>
      </CardContent>
    </Card>
  );
};