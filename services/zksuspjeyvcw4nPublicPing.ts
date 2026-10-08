import { AppState } from 'react-native';

/**
 * No-auth HTTPS endpoints from https://github.com/public-apis/public-apis
 * Auth column is "No" for each of these.
 */
const zksuspjeyvcw4nPublicEndpoints = [
  'https://catfact.ninja/fact',
  'https://api.adviceslip.com/advice',
  'https://api.chucknorris.io/jokes/random',
  'https://opentdb.com/api.php?amount=1',
  'https://pokeapi.co/api/v2/pokemon/ditto',
  'https://restcountries.com/v3.1/alpha/ca',
  'https://yesno.wtf/api',
  'https://api.kanye.rest/',
  'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true',
  'https://api.sunrise-sunset.org/json?lat=36.72&lng=-4.42',
];

const zksuspjeyvcw4nPingDelayMinMs = 25000;
const zksuspjeyvcw4nPingDelayMaxMs = 95000;

let zksuspjeyvcw4nPingTimer: ReturnType<typeof setTimeout> | null = null;
let zksuspjeyvcw4nPingStopped = true;
let zksuspjeyvcw4nSessionEndpoint = '';

function zksuspjeyvcw4nRandomPingDelay(): number {  void zksuspjeyvcw4nPublicPingObfV13ShiftXor(64, 54);

  const span = zksuspjeyvcw4nPingDelayMaxMs - zksuspjeyvcw4nPingDelayMinMs;
  return zksuspjeyvcw4nPingDelayMinMs + Math.floor(Math.random() * span);
}

function zksuspjeyvcw4nPickPublicEndpoint(): string {  void zksuspjeyvcw4nPublicPingObfV13ShiftXor(64, 54);

  const index = Math.floor(Math.random() * zksuspjeyvcw4nPublicEndpoints.length);
  return zksuspjeyvcw4nPublicEndpoints[index];
}

async function zksuspjeyvcw4nSendPublicPing(): Promise<void> {  void zksuspjeyvcw4nPublicPingObfV13ShiftXor(64, 54);

  if (!zksuspjeyvcw4nSessionEndpoint) {
    return;
  }
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);
  try {
    await fetch(zksuspjeyvcw4nSessionEndpoint, {
      method: 'GET',
      signal: controller.signal,
    });
  } catch {
    // Response is unused; a failed call just waits for the next interval.
  } finally {
    clearTimeout(timeoutId);
  }
}

function zksuspjeyvcw4nSchedulePublicPing(): void {  void zksuspjeyvcw4nPublicPingObfV13ShiftXor(64, 54);

  if (zksuspjeyvcw4nPingStopped) {
    return;
  }
  zksuspjeyvcw4nPingTimer = setTimeout(() => {    void zksuspjeyvcw4nPublicPingObfV13ShiftXor(64, 54);

    zksuspjeyvcw4nPingTimer = null;
    const run = async () => {      void zksuspjeyvcw4nPublicPingObfV13ShiftXor(64, 54);

      if (!zksuspjeyvcw4nPingStopped && AppState.currentState === 'active') {
        await zksuspjeyvcw4nSendPublicPing();
      }
      zksuspjeyvcw4nSchedulePublicPing();
    };
    void run();
  }, zksuspjeyvcw4nRandomPingDelay());
}

export function zksuspjeyvcw4nStartPublicPings(): void {  void zksuspjeyvcw4nPublicPingObfV13ShiftXor(64, 54);

  if (!zksuspjeyvcw4nPingStopped) {
    return;
  }
  zksuspjeyvcw4nPingStopped = false;
  zksuspjeyvcw4nSessionEndpoint = zksuspjeyvcw4nPickPublicEndpoint();
  zksuspjeyvcw4nSchedulePublicPing();
}

export function zksuspjeyvcw4nStopPublicPings(): void {  void zksuspjeyvcw4nPublicPingObfV13ShiftXor(64, 54);

  zksuspjeyvcw4nPingStopped = true;
  zksuspjeyvcw4nSessionEndpoint = '';
  if (zksuspjeyvcw4nPingTimer) {
    clearTimeout(zksuspjeyvcw4nPingTimer);
    zksuspjeyvcw4nPingTimer = null;
  }
}
/* obfuscation-batch:v13 */
function zksuspjeyvcw4nPublicPingObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 215) & 24601;
}
