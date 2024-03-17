"use client"

import { Button } from '@/components/ui/button';
import { Mic, SendHorizonal } from 'lucide-react';
import { RusKeyboard } from './_components/rus-keyboard';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Avatar } from '@/components/ui/avatar';

export default function Home() {
  const router = useRouter();

  const [value, setValue] = useState('')

  const onSubmit = () => {
    const params = new URLSearchParams({ 'question': value });
    router.push(`/info/q?${params.toString()}`);
  }

  return (
    <div className=''>
      <div className="w-full" style={{ height: "38rem" }}>
        <Avatar
          cameraView="upper"
        />
      </div>
      <div className='group absolute bottom-0 w-full flex flex-col'>
        <div className='flex px-6 mb-2'>
          <Button
            variant="secondary"
            size="icon"
            onClick={() => { }}
            className='rounded-full bg-white border-slate-300 border p-2 mr-2'
          >
            <Mic />
          </Button>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            variant="secondary"
            size="icon"
            onClick={onSubmit}
            className='rounded-full bg-blue-300 text-white border-slate-400 border p-2 ml-2'
          >
            <SendHorizonal />
          </Button>
        </div>
        <RusKeyboard
          onChange={(input: string) => setValue(input)}
        />
      </div>
    </div>
  );
}
