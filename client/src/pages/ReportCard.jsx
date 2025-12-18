import { ShieldCheck, ShieldAlert, Globe, Lock, AlertTriangle, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const ReportCard = ({ data }) => {
  // 1. Destructure with default values to prevent "undefined" errors
  const { report = {}, explanations = [] } = data || {};

  return (
    <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
      {/* Explanations Panel */}
      <Card className="shadow-md h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <ShieldAlert className="w-5 h-5 text-blue-600" />
            Analysis Insights
          </CardTitle>
          <CardDescription>Key factors affecting this score</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {/* 2. Safe check for length using optional chaining */}
          {explanations?.length > 0 ? (
            explanations.map((exp, index) => (
              <Alert key={index} variant="destructive" className="bg-red-50 border-red-200 text-red-900">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Risk Detected</AlertTitle>
                <AlertDescription>{exp}</AlertDescription>
              </Alert>
            ))
          ) : (
            <Alert className="bg-green-50 border-green-200 text-green-900">
              <ShieldCheck className="h-4 w-4 text-green-600" />
              <AlertTitle>Clean Report</AlertTitle>
              <AlertDescription>No significant security risks detected.</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Technical Details Panel */}
      <Card className="shadow-md h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Globe className="w-5 h-5 text-gray-600" />
            Technical Data
          </CardTitle>
          <CardDescription>Raw parameters from our scanners</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground flex items-center gap-2">
              <Info size={14} /> Domain Age
            </span>
            <span className="font-medium">
              {/* 3. Using optional chaining for nested objects */}
              {report?.domain?.ageDays > 0 ? `${report.domain.ageDays} days` : 'Unknown'}
            </span>
          </div>
          <Separator />

          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground flex items-center gap-2">
              <Lock size={14} /> SSL Certificate
            </span>
            {report?.ssl?.valid ? (
               <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Valid</Badge>
            ) : (
               <Badge variant="destructive">Invalid</Badge>
            )}
          </div>
          <Separator />

          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Registrar</span>
            <span className="font-medium text-sm truncate max-w-[150px]" title={report?.domain?.registrar}>
              {report?.domain?.registrar || "Unknown"}
            </span>
          </div>
          <Separator />

          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Reputation</span>
            {report?.reputation?.blacklisted ? (
              <Badge variant="destructive">Blacklisted</Badge>
            ) : (
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Clean</Badge>
            )}
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default ReportCard;