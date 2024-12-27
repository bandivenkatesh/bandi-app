"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signIn, signUp } from '@/lib/auth';
import { useToast } from '@/hooks/use-toast';
import { Mail, Lock, User, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TabSelector } from './TabSelector';
import { terminalInput, terminalButton } from './styles';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        const { error } = await signUp(email, password, fullName);
        if (error) throw error;
        toast({
          title: "TERMINAL ACCESS GRANTED",
          description: "Initialization sequence complete. Verify your connection.",
        });
        onClose();
      } else {
        const { error } = await signIn(email, password);
        if (error) throw error;
        toast({
          title: "ACCESS GRANTED",
          description: "Terminal connection established.",
        });
        onClose();
      }
    } catch (error: any) {
      toast({
        title: "ACCESS DENIED",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-black border border-[#FF7300]/20 p-0 rounded-none">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <DialogTitle className="text-2xl font-mono text-[#FF7300] uppercase tracking-wider">
                Access Terminal
              </DialogTitle>
              <p className="text-[#FF7300]/50 font-mono text-sm">
                Initialize authentication sequence
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-[#FF7300] hover:text-[#FF7300]/80 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <TabSelector isSignUp={isSignUp} onToggle={setIsSignUp} />

          <AnimatePresence mode="wait">
            <motion.form
              key={isSignUp ? "signup" : "signin"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {isSignUp && (
                <div className="relative">
                  <User className="absolute left-3 top-3.5 h-5 w-5 text-[#FF7300]/50" />
                  <Input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={terminalInput()}
                    placeholder="OPERATOR NAME"
                    required
                  />
                </div>
              )}

              <div className="relative">
                <Mail className="absolute left-3 top-3.5 h-5 w-5 text-[#FF7300]/50" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={terminalInput()}
                  placeholder="NAME@EXAMPLE.COM"
                  required
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-3.5 h-5 w-5 text-[#FF7300]/50" />
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={terminalInput()}
                  placeholder="ACCESS CODE"
                  required
                  minLength={6}
                />
              </div>

              <Button
                type="submit"
                className={terminalButton()}
                disabled={loading}
              >
                {loading ? (
                  "PROCESSING..."
                ) : (
                  <>
                    {isSignUp ? "INITIALIZE REGISTRATION" : "INITIALIZE LOGIN"}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </motion.form>
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}