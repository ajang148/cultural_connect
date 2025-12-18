import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import SupportCenter from "./pages/support-center";
import CulturalCalendar from "./pages/cultural-calendar";
import ImmigrationServices from "./pages/immigration-services";
import CulturalPrograms from "./pages/cultural-programs";
import CommunityForum from "./pages/community-forum";
import Homepage from "./pages/homepage";
import SignupForm from "./pages/SignupForm";
import Login from "./pages/Login";
import Header from "components/ui/Header";
// import ProtectedRoute from "./components/ProtectedRoute";
import ThreadDetail from "pages/community-forum/components/ThreadDetail";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Public Routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/support-center" element={<SupportCenter />} />
          <Route path="/cultural-calendar" element={<CulturalCalendar />} />
          <Route path="/immigration-services" element={<ImmigrationServices />} />
          <Route path="/cultural-programs" element={<CulturalPrograms />} />
          <Route path="/community-forum" element={<CommunityForum />} /> {/* PUBLIC ACCESS */}
          <Route path="/community-forum/thread/:threadId" element={<ThreadDetail/>} />
          
          {/* Protected Routes (if you have any) */}
          {/* <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} /> */}
          {/* <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} /> */}
          
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;