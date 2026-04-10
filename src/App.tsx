import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import html2canvas from 'html2canvas';
import { Download, Crosshair, Map, Shield, ChevronRight } from 'lucide-react';
import { questionsData } from './data/questions';
import { resultsData } from './data/results';

type Scores = Record<string, number>;

function App() {
  const [step, setStep] = useState<'start' | 'quiz' | 'result'>('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Scores>({
    A: 0, T: 0,
    S: 0, C: 0,
    L: 0, Q: 0,
    I: 0, F: 0,
  });
  const [resultId, setResultId] = useState<string>('');
  const resultRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    setStep('quiz');
  };

  const handleAnswer = (effect: Record<string, number>) => {
    const newScores = { ...scores };
    for (const key in effect) {
      newScores[key] = (newScores[key] || 0) + effect[key];
    }
    setScores(newScores);

    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newScores);
    }
  };

  const calculateResult = (finalScores: Scores) => {
    const r1 = finalScores['A'] >= finalScores['T'] ? 'A' : 'T';
    const r2 = finalScores['S'] >= finalScores['C'] ? 'S' : 'C';
    const r3 = finalScores['L'] >= finalScores['Q'] ? 'L' : 'Q';
    const r4 = finalScores['I'] >= finalScores['F'] ? 'I' : 'F';
    const finalId = `${r1}${r2}${r3}${r4}`;
    setResultId(finalId);
    setStep('result');
  };

  const restartTest = () => {
    setScores({ A: 0, T: 0, S: 0, C: 0, L: 0, Q: 0, I: 0, F: 0 });
    setCurrentQuestion(0);
    setResultId('');
    setStep('start');
  };

  const downloadResult = async () => {
    if (resultRef.current) {
      try {
        const canvas = await html2canvas(resultRef.current, { backgroundColor: '#1a1a1a' });
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = `PUBG_人格测试_${resultId}.png`;
        link.click();
      } catch (err) {
        console.error('Failed to generate image', err);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[var(--color-pubg-dark)]">
      <div className="w-full max-w-lg mx-auto">
        <AnimatePresence mode="wait">
          {step === 'start' && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-8"
            >
              <h1 className="text-5xl font-black text-[var(--color-pubg-yellow)] tracking-wider">PBTI</h1>
              <h2 className="text-2xl font-bold text-white">绝地求生 人格测试</h2>
              <p className="text-gray-400 text-lg">
                想知道你在PUBG战场上属于哪种传奇角色吗？
                <br />完成12道情景测试，揭晓你的专属战神档案。
              </p>
              <button
                onClick={handleStart}
                className="mt-8 bg-[var(--color-pubg-yellow)] text-black font-bold text-xl py-4 px-12 rounded-lg hover:bg-yellow-500 transition-colors shadow-[0_0_15px_rgba(242,169,0,0.5)] flex items-center justify-center mx-auto"
              >
                开始测试 <ChevronRight className="ml-2" />
              </button>
            </motion.div>
          )}

          {step === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="w-full"
            >
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>进度</span>
                  <span>{currentQuestion + 1} / {questionsData.length}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-[var(--color-pubg-yellow)] h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questionsData.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 md:p-8 rounded-2xl border border-gray-700 shadow-xl backdrop-blur-sm">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-8 leading-relaxed">
                  {questionsData[currentQuestion].text}
                </h3>
                <div className="space-y-4">
                  {questionsData[currentQuestion].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(option.effect)}
                      className="w-full text-left p-4 rounded-xl bg-gray-700/50 hover:bg-gray-600 border border-gray-600 hover:border-[var(--color-pubg-yellow)] transition-all text-gray-200 hover:text-white"
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full"
            >
              <div 
                ref={resultRef}
                className="bg-gray-800 p-8 rounded-3xl border-2 border-[var(--color-pubg-yellow)] relative overflow-hidden"
              >
                {/* Background decorative element */}
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Crosshair size={120} />
                </div>

                <div className="relative z-10">
                  <div className="text-[var(--color-pubg-yellow)] font-bold text-lg mb-2 tracking-widest">
                    您的PUBG人格是：{resultId}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-2">
                    {resultsData[resultId]?.name || '未知战神'}
                  </h2>
                  <p className="text-xl text-gray-300 italic mb-8 border-l-4 border-[var(--color-pubg-yellow)] pl-4">
                    "{resultsData[resultId]?.title}"
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm text-gray-400 mb-2 flex items-center"><Shield className="w-4 h-4 mr-2" /> 战术风格</h4>
                      <p className="text-gray-200 leading-relaxed">
                        {resultsData[resultId]?.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-900/50 p-4 rounded-xl">
                        <h4 className="text-sm text-gray-400 mb-1 flex items-center"><Crosshair className="w-4 h-4 mr-2" /> 推荐枪械</h4>
                        <p className="font-medium text-white">{resultsData[resultId]?.weapon}</p>
                      </div>
                      <div className="bg-gray-900/50 p-4 rounded-xl">
                        <h4 className="text-sm text-gray-400 mb-1 flex items-center"><Map className="w-4 h-4 mr-2" /> 推荐跳点</h4>
                        <p className="font-medium text-white">{resultsData[resultId]?.drop}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center text-xs text-gray-500">
                  扫描二维码或访问网站测测你的PUBG人格
                </div>
              </div>

              <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <button
                  onClick={downloadResult}
                  className="flex items-center justify-center bg-[var(--color-pubg-yellow)] text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" /> 保存图片分享
                </button>
                <button
                  onClick={restartTest}
                  className="flex items-center justify-center bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  再测一次
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
