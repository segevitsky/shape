import React, { useState } from 'react';
import { Clock, Zap, Target, Calendar, CheckCircle, Utensils, Coffee } from 'lucide-react';

const ExplosivePowerRoutine = () => {
  const [selectedDay, setSelectedDay] = useState('power');
  const [completedExercises, setCompletedExercises] = useState({});
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [showNutrition, setShowNutrition] = useState(false);

  const toggleExercise = (exerciseId: any) => {
    setCompletedExercises(prev => ({
      ...prev,
      //@ts-ignore
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const routines = {
    power: {
      title: "Explosive Power Day",
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      focus: "Maximum explosive output + power endurance",
      warmup: [
        "Dynamic arm circles - 10 each direction",
        "Leg swings - 10 each leg",
        "Jump rope or jumping jacks - 2 minutes",
        "Wrist circles - 10 each direction"
      ],
      circuits: [
        {
          name: "Power Circuit A",
          rounds: 4,
          rest: "90 seconds between rounds",
          exercises: [
            { name: "Explosive Push-ups", reps: "6-8", note: "Hands leave ground" },
            { name: "Jump Squats", reps: "8-10", note: "Maximum height" },
            { name: "Burpee Tuck Jumps", reps: "5-6", note: "Knees to chest" },
            { name: "Pike Push-ups (Explosive)", reps: "5-7", note: "Drive up fast" }
          ]
        },
        {
          name: "Power Circuit B",
          rounds: 3,
          rest: "60 seconds between rounds",
          exercises: [
            { name: "Plyometric Lunges", reps: "6 each leg", note: "Switch legs in air" },
            { name: "Clap Push-ups", reps: "5-8", note: "Higher clap each week" },
            { name: "Box/Chair Step-ups (Explosive)", reps: "8 each leg", note: "Drive knee up" },
            { name: "Mountain Climber Bursts", reps: "10 total", note: "Fast as possible" }
          ]
        }
      ]
    },
    hiit: {
      title: "HIIT Shredding Day",
      icon: <Target className="w-5 h-5 text-red-500" />,
      focus: "Fat burning + cardiovascular power",
      warmup: [
        "High knees - 30 seconds",
        "Butt kicks - 30 seconds", 
        "Arm circles - 30 seconds",
        "Bodyweight squats - 15 reps"
      ],
      circuits: [
        {
          name: "Metabolic Circuit",
          rounds: 5,
          rest: "45 seconds between rounds",
          exercises: [
            { name: "Burpees", reps: "30 seconds", note: "Non-stop pace" },
            { name: "Jump Squats", reps: "30 seconds", note: "Continuous jumping" },
            { name: "Push-up to T", reps: "30 seconds", note: "Rotate each rep" },
            { name: "High Knees", reps: "30 seconds", note: "Maximum speed" }
          ]
        },
        {
          name: "Finisher Circuit",
          rounds: 3,
          rest: "30 seconds between rounds",
          exercises: [
            { name: "Sprawls", reps: "45 seconds", note: "Like burpee, no jump" },
            { name: "Plank Jacks", reps: "45 seconds", note: "Jump feet apart/together" },
            { name: "Russian Twists", reps: "45 seconds", note: "Fast rotation" }
          ]
        }
      ]
    },
    strength: {
      title: "Strength Progression Day", 
      icon: <CheckCircle className="w-5 h-5 text-blue-500" />,
      focus: "Progressive overload + skill building",
      warmup: [
        "Band pull-aparts - 15 reps",
        "Scapular wall slides - 10 reps",
        "Cat-cow stretches - 10 reps",
        "Bodyweight squats - 10 reps"
      ],
      circuits: [
        {
          name: "Upper Body Strength",
          rounds: 4,
          rest: "2-3 minutes between rounds",
          exercises: [
            { name: "Pull-ups/Chin-ups", reps: "Max -2", note: "Leave 2 reps in tank" },
            { name: "Archer Push-ups", reps: "5 each side", note: "Progress to one-arm" },
            { name: "Pike Push-ups", reps: "8-12", note: "Work toward handstand" },
            { name: "L-Sit Hold", reps: "15-30 sec", note: "Progress weekly" }
          ]
        },
        {
          name: "Lower Body Strength",
          rounds: 3,
          rest: "90 seconds between rounds", 
          exercises: [
            { name: "Pistol Squat Progression", reps: "5 each leg", note: "Use assistance if needed" },
            { name: "Single-leg Glute Bridges", reps: "12 each leg", note: "2-sec pause at top" },
            { name: "Cossack Squats", reps: "8 each side", note: "Deep stretch" },
            { name: "Wall Sit", reps: "45-60 sec", note: "Increase weekly" }
          ]
        }
      ]
    },
    active: {
      title: "Active Recovery Day",
      icon: <Calendar className="w-5 h-5 text-green-500" />,
      focus: "Movement quality + flexibility + light cardio",
      warmup: [
        "Gentle neck rolls - 5 each direction",
        "Shoulder shrugs - 10 reps", 
        "Ankle circles - 10 each direction",
        "Deep breathing - 1 minute"
      ],
      circuits: [
        {
          name: "Mobility Flow",
          rounds: 2,
          rest: "Minimal rest",
          exercises: [
            { name: "Cat-Cow Stretches", reps: "10 slow reps", note: "Focus on spine mobility" },
            { name: "Hip Circles", reps: "10 each direction", note: "Hands on hips" },
            { name: "Arm Circles", reps: "10 each direction", note: "Large, controlled circles" },
            { name: "Leg Swings", reps: "10 each leg", note: "Front to back, side to side" }
          ]
        },
        {
          name: "Light Cardio",
          rounds: 1,
          rest: "As needed",
          exercises: [
            { name: "Easy Walk/March", reps: "10-15 minutes", note: "Conversational pace" },
            { name: "Gentle Stretching", reps: "10 minutes", note: "Hold each stretch 30 sec" },
            { name: "Foam Rolling", reps: "5-10 minutes", note: "If available" }
          ]
        }
      ]
    }
  };

  const nutritionPlans = {
    power: {
      title: "יום כוח - תזונה לאנרגיה מרבית",
      preworkout: {
        timing: "30-60 דקות לפני האימון",
        options: [
          "בננה + כף דבש + קפה",
          "תפוח + 10 שקדים + קפה",
          "לחם מלא + דבש + קפה שחור"
        ]
      },
      postworkout: {
        timing: "תוך 30 דקות אחרי האימון", 
        options: [
          "שייק חלבון + בננה + תמרים",
          "חלב שוקולד + לחמנייה קטנה",
          "יוגורט יווני + פירות + דבש"
        ]
      },
      meals: [
        {
          name: "ארוחת בוקר",
          time: "7:00-8:00",
          options: [
            "3 ביצים מקושקשות + לחם מלא + אבוקדו חצי + ירקות",
            "שיבולת שועל + בננה + אגוזים + דבש + קפה",
            "קוטג' + תמרים + אגוזי מלך + לחם מלא"
          ]
        },
        {
          name: "ארוחת צהריים",
          time: "13:00-14:00", 
          options: [
            "חזה עוף 150 גר' + אורז חום + סלט גדול + חומוס",
            "סלמון 120 גר' + בטטה אפויה + ירקות מוקפצים",
            "המבורגר הודו + לחמנייה מלאה + סלט + בטטה צ'יפס"
          ]
        },
        {
          name: "חטיף אחה\"צ",
          time: "16:30-17:00",
          options: [
            "טחינה גולמית + גזר + מלפפון",
            "אגוזים מעורבים + תמרים",
            "יוגורט יווני + פירות יער"
          ]
        },
        {
          name: "ארוחת ערב",
          time: "19:30-20:30",
          options: [
            "דג פילה 150 גר' + קינואה + ירקות צלויים",
            "סטייק הודו + אורז לבן + סלט + טחינה",
            "פסטה מלאה + רוטב עגבניות + גבינת פטה + זיתים"
          ]
        }
      ],
      tips: [
        "שתה הרבה מים - 3-4 ליטר ביום",
        "אל תפחד מפחמימות - אתה צריך אותן לכוח",
        "תכלול חלבון בכל ארוחה עיקרית",
        "מותר לפזר 1-2 קוביות שוקולד במהלך היום"
      ]
    },
    hiit: {
      title: "יום HIIT - תזונה לשריפת שומן",
      preworkout: {
        timing: "45-60 דקות לפני האימון",
        options: [
          "קפה שחור + תפוח קטן",
          "תה ירוק + 5 שקדים",
          "מים + לימון + כף דבש קטנה"
        ]
      },
      postworkout: {
        timing: "תוך 45 דקות אחרי האימון",
        options: [
          "שייק חלבון + מים (ללא פירות)",
          "יוגורט יווני 0% + אגוזים",
          "ביצה קשה + מלפפון + עגבניות"
        ]
      },
      meals: [
        {
          name: "ארוחת בוקר",
          time: "7:00-8:00",
          options: [
            "2 ביצים + אבוקדו חצי + ירקות + קפה",
            "יוגורט יווני + אגוזים + פירות יער",
            "קוטג' + עגבניות + מלפפון + לחם דק"
          ]
        },
        {
          name: "ארוחת צהריים", 
          time: "13:00-14:00",
          options: [
            "סלט גדול + חזה עוף + חומוס + טחינה",
            "דג + ירקות מוקפצים + אורז חום מעט",
            "חביתת ירקות + גבינה לבנה + סלט ירוק"
          ]
        },
        {
          name: "חטיף אחה\"צ",
          time: "16:30-17:00", 
          options: [
            "גזר + טחינה גולמית",
            "יוגורט 0% + פירות יער",
            "10 שקדים + תפוח"
          ]
        },
        {
          name: "ארוחת ערב",
          time: "19:30-20:30",
          options: [
            "דג פילה + סלט ענק + אבוקדו",
            "חזה הודו + ירקות צלויים + קינואה מעט", 
            "סלט טונה + ביצה + ירקות + זיתים"
          ]
        }
      ],
      tips: [
        "פחות פחמימות ביום הזה - מתמקדים בחלבון וירקות",
        "שתה לפני ואחרי האימון הרבה מים",
        "מותר שוקולד מריר (85%+) קוביה אחת אחרי הארוחות",
        "תאכל הרבה ירקות כדי להישאר שבע"
      ]
    },
    strength: {
      title: "יום כוח - תזונה לבניית שריר",
      preworkout: {
        timing: "60-90 דקות לפני האימון",
        options: [
          "בננה + חמאת בוטנים + קפה",
          "לחם מלא + דבש + קפה",
          "שיבולת שועל + פירות + קפה"
        ]
      },
      postworkout: {
        timing: "תוך 30 דקות אחרי האימון",
        options: [
          "שייק חלבון + בננה + שיבולת שועל",
          "חלב + תמרים + קוואקר",
          "יוגורט + פירות + גרנולה"
        ]
      },
      meals: [
        {
          name: "ארוחת בוקר",
          time: "7:00-8:00",
          options: [
            "3 ביצים + לחם מלא + גבינה + ירקות",
            "שיבולת שועל + חלב + אגוזים + פירות",
            "קוטג' + תמרים + לוז + קפה + לחם"
          ]
        },
        {
          name: "ארוחת צהריים", 
          time: "13:00-14:00",
          options: [
            "חזה עוף 200 גר' + אורז + חומוס + סלט",
            "סטייק בקר + תפוח אדמה + ירקות מוקפצים",
            "דג + פסטה + רוטב עגבניות + פרמזן"
          ]
        },
        {
          name: "חטיף אחה\"צ",
          time: "16:30-17:00",
          options: [
            "אגוזים + תמרים + בננה",
            "יוגורט + גרנולה + דבש",
            "חמאת בוטנים + תפוח"
          ]
        },
        {
          name: "ארוחת ערב", 
          time: "19:30-20:30",
          options: [
            "סלמון + בטטה + אספרגוס",
            "חזה הודו + אורז לבן + ירקות + טחינה",
            "המבורגר בית + לחמנייה + בטטה צ'יפס"
          ]
        }
      ],
      tips: [
        "זה היום הכי חשוב לחלבון - לפחות 1.5 גר' לקילו",
        "תאכל פחמימות איכותיות לפני ואחרי האימון",
        "מותר מתוקים קטנים אחרי אימון כוח",
        "שתה חלב לפני השינה לשיקום השרירים"
      ]
    },
    active: {
      title: "יום התאוששות - תזונה לשיקום",
      preworkout: {
        timing: "לא נדרש - פעילות קלה",
        options: [
          "קפה + חטיף קל אם רוצה",
          "תה + כמה אגוזים",
          "מים + לימון"
        ]
      },
      postworkout: {
        timing: "לא נדרש - פעילות קלה",
        options: [
          "מים + אלקטרוליטים",
          "יוגורט קל",
          "פירות טריים"
        ]
      },
      meals: [
        {
          name: "ארוחת בוקר",
          time: "7:00-8:00",
          options: [
            "יוגורט יווני + פירות + גרנולה + קפה",
            "ביצים + אבוקדו + לחם מלא + ירקות",
            "שיבולת שועל + בננה + אגוזים + דבש"
          ]
        },
        {
          name: "ארוחת צהריים",
          time: "13:00-14:00", 
          options: [
            "סלט חזה עוף + ירקות + קינואה + רוטב",
            "דג אפוי + ירקות צבעוניים + אורז חום",
            "חביתת ירקות + גבינה + לחם + סלט"
          ]
        },
        {
          name: "חטיף אחה\"צ",
          time: "16:30-17:00",
          options: [
            "פירות העונה + אגוזים",
            "יוגורט + פירות יער",
            "ירקות + חומוס"
          ]
        },
        {
          name: "ארוחת ערב",
          time: "19:30-20:30",
          options: [
            "דג לבן + ירקות מוקפצים + אורז יסמין",
            "מרק עוף + ירקות + לחם מלא",
            "פסטה עם ירקות + גבינת פטה"
          ]
        }
      ],
      tips: [
        "יום להנות מהאוכל ולאכול בשקט",
        "מותר לפזר מתוקים או חטיפים שאתה אוהב",
        "שתה הרבה מים + תה צמחים",
        "תאכל הרבה ירקות ופירות לוויטמינים"
      ]
    }
  };

  const weeklySchedule = {
    1: { title: "Foundation Week", intensity: "Build base explosive power" },
    2: { title: "Progression Week", intensity: "Increase volume and complexity" },
    3: { title: "Peak Week", intensity: "Maximum intensity and challenge" },
    4: { title: "Deload Week", intensity: "Recover and consolidate gains" }
  };


  // @ts-ignore
  const currentRoutine = routines[selectedDay];
  // @ts-ignore
  const currentNutrition = nutritionPlans[selectedDay];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            🔥 Explosive Power & Shredding Program
          </h1>
          <p className="text-gray-600">Break through plateaus • Build explosive power • Get shredded</p>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Week Progress</h3>
            <select 
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(Number(e.target.value))}
              className="px-3 py-1 border border-gray-300 rounded-lg"
            >
              {Object.entries(weeklySchedule).map(([week, info]) => (
                <option key={week} value={week}>Week {week}: {info.title}</option>
              ))}
            </select>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-blue-800 font-medium">
              {
              // @ts-ignore
              weeklySchedule[selectedWeek].intensity
              }
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {Object.entries(routines).map(([key, routine]) => (
            <button
              key={key}
              onClick={() => setSelectedDay(key)}
              className={`p-3 rounded-lg border-2 transition-all ${
                selectedDay === key 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                {routine.icon}
                <span className="font-medium text-sm">{routine.title}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setShowNutrition(false)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              !showNutrition 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            💪 תוכנית אימונים
          </button>
          <button
            onClick={() => setShowNutrition(true)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              showNutrition 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🍽️ תזונה יומית
          </button>
        </div>
      </div>

      {!showNutrition ? (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-2">
              {currentRoutine.icon}
              <h2 className="text-2xl font-bold text-gray-800">{currentRoutine.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{currentRoutine.focus}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">🔥 Warm-up (5 minutes)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {currentRoutine.warmup.map((exercise: any, index: number) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-orange-50 rounded">
                  <div className="w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center text-xs font-bold text-orange-800">
                    {index + 1}
                  </div>
                  <span className="text-sm text-gray-700">{exercise}</span>
                </div>
              ))}
            </div>
          </div>

          {currentRoutine.circuits.map((circuit: any, circuitIndex: number) => (
            <div key={circuitIndex} className="mb-6 border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">{circuit.name}</h3>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">{circuit.rounds} rounds</span> • {circuit.rest}
                </div>
              </div>

              <div className="space-y-3">
                {circuit.exercises.map((exercise: any, exerciseIndex: number) => {
                  const exerciseId = `${selectedDay}-${circuitIndex}-${exerciseIndex}`;
                  // @ts-ignore
                  const isCompleted = completedExercises[exerciseId];
                  
                  return (
                    <div 
                      key={exerciseIndex}
                      className={`p-3 rounded-lg border transition-all cursor-pointer ${
                        isCompleted 
                          ? 'bg-green-50 border-green-200' 
                          : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => toggleExercise(exerciseId)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          isCompleted 
                            ? 'bg-green-500 border-green-500' 
                            : 'border-gray-300'
                        }`}>
                          {isCompleted && <CheckCircle className="w-4 h-4 text-white" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className={`font-medium ${isCompleted ? 'text-green-800' : 'text-gray-800'}`}>
                              {exercise.name}
                            </span>
                            <span className="text-sm font-semibold text-blue-600">
                              {exercise.reps}
                            </span>
                          </div>
                          {exercise.note && (
                            <p className="text-xs text-gray-600 mt-1">{exercise.note}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg mt-6">
            <h3 className="font-semibold text-gray-800 mb-2">💡 Pro Tips for Week {selectedWeek}</h3>
            <div className="text-sm text-gray-700 space-y-1">
              {selectedWeek === 1 && (
                <>
                  <p>• Focus on perfect form before speed</p>
                  <p>• Track your max reps to see progress</p>
                  <p>• Take extra rest if you need it</p>
                </>
              )}
              {selectedWeek === 2 && (
                <>
                  <p>• Increase explosive speed on power days</p>
                  <p>• Reduce rest time by 10-15 seconds</p>
                  <p>• Add extra reps to strength exercises</p>
                </>
              )}
              {selectedWeek === 3 && (
                <>
                  <p>• Push for maximum intensity</p>
                  <p>• Try advanced exercise variations</p>
                  <p>• This is your peak performance week!</p>
                </>
              )}
              {selectedWeek === 4 && (
                <>
                  <p>• Reduce intensity by 20-30%</p>
                  <p>• Focus on mobility and recovery</p>
                  <p>• Prepare your body for the next cycle</p>
                </>
              )}
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg mt-4 border border-yellow-200">
            <h3 className="font-semibold text-yellow-800 mb-2">⚡ Weekly Schedule Recommendation</h3>
            <div className="text-sm text-yellow-700">
              <p><strong>Monday:</strong> Power Day • <strong>Tuesday:</strong> HIIT Shredding • <strong>Wednesday:</strong> Active Recovery</p>
              <p><strong>Thursday:</strong> Strength Progression • <strong>Friday:</strong> Power Day • <strong>Saturday:</strong> HIIT Shredding • <strong>Sunday:</strong> Full Rest or Light Activity</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-2">
              <Utensils className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-800">{currentNutrition.title}</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <div className="flex items-center gap-2 mb-3">
                <Coffee className="w-5 h-5 text-orange-600" />
                <h3 className="font-semibold text-orange-800">לפני האימון</h3>
              </div>
              <p className="text-sm text-orange-700 mb-2 font-medium">{currentNutrition.preworkout.timing}</p>
              <div className="space-y-1">
                {currentNutrition.preworkout.options.map((option: any, index: number) => (
                  <div key={index} className="text-sm text-gray-700 bg-white p-2 rounded">
                    • {option}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold text-green-800">אחרי האימון</h3>
              </div>
              <p className="text-sm text-green-700 mb-2 font-medium">{currentNutrition.postworkout.timing}</p>
              <div className="space-y-1">
                {currentNutrition.postworkout.options.map((option: any, index: number) => (
                  <div key={index} className="text-sm text-gray-700 bg-white p-2 rounded">
                    • {option}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            {currentNutrition.meals.map((meal: any, index: number) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-800 text-lg">{meal.name}</h3>
                  <span className="text-sm text-blue-600 font-medium">{meal.time}</span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {meal.options.map((option: any, optionIndex: number) => (
                    <div key={optionIndex} className="bg-gray-50 p-3 rounded border-r-4 border-blue-400">
                      <p className="text-sm text-gray-700">
                        <span className="font-medium text-blue-600">אופציה {optionIndex + 1}:</span> {option}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3">💡 טיפים תזונתיים ליום הזה</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {currentNutrition.tips.map((tip: any, index: number) => (
                <div key={index} className="text-sm text-gray-700 bg-white p-2 rounded">
                  • {tip}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExplosivePowerRoutine;