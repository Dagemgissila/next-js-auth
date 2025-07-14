import { BackButton } from "@/components/auth/back-button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import React from "react";

const AuthErroPage = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <p>Something went wrong</p>
        </CardHeader>
        <CardFooter>
          <BackButton label="back to login" href="/auth.login" />
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthErroPage;
