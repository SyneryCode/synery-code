import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig(({ mode }) => {
  // تحميل environment variables بناءً على mode
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, './src'),
        // إزالة جميع aliases غير الضرورية
        'vaul': 'vaul',
        'sonner': 'sonner',
        'recharts': 'recharts',
        'react-resizable-panels': 'react-resizable-panels',
        'react-hook-form': 'react-hook-form',
        'react-day-picker': 'react-day-picker',
        'next-themes': 'next-themes',
        'lucide-react': 'lucide-react',
        'input-otp': 'input-otp',
        'embla-carousel-react': 'embla-carousel-react',
        'cmdk': 'cmdk',
        'class-variance-authority': 'class-variance-authority',
        '@radix-ui/react-tooltip': '@radix-ui/react-tooltip',
        '@radix-ui/react-toggle': '@radix-ui/react-toggle',
        '@radix-ui/react-toggle-group': '@radix-ui/react-toggle-group',
        '@radix-ui/react-tabs': '@radix-ui/react-tabs',
        '@radix-ui/react-switch': '@radix-ui/react-switch',
        '@radix-ui/react-slot': '@radix-ui/react-slot',
        '@radix-ui/react-slider': '@radix-ui/react-slider',
        '@radix-ui/react-separator': '@radix-ui/react-separator',
        '@radix-ui/react-select': '@radix-ui/react-select',
        '@radix-ui/react-scroll-area': '@radix-ui/react-scroll-area',
        '@radix-ui/react-radio-group': '@radix-ui/react-radio-group',
        '@radix-ui/react-progress': '@radix-ui/react-progress',
        '@radix-ui/react-popover': '@radix-ui/react-popover',
        '@radix-ui/react-navigation-menu': '@radix-ui/react-navigation-menu',
        '@radix-ui/react-menubar': '@radix-ui/react-menubar',
        '@radix-ui/react-label': '@radix-ui/react-label',
        '@radix-ui/react-hover-card': '@radix-ui/react-hover-card',
        '@radix-ui/react-dropdown-menu': '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-dialog': '@radix-ui/react-dialog',
        '@radix-ui/react-context-menu': '@radix-ui/react-context-menu',
        '@radix-ui/react-collapsible': '@radix-ui/react-collapsible',
        '@radix-ui/react-checkbox': '@radix-ui/react-checkbox',
        '@radix-ui/react-avatar': '@radix-ui/react-avatar',
        '@radix-ui/react-aspect-ratio': '@radix-ui/react-aspect-ratio',
        '@radix-ui/react-alert-dialog': '@radix-ui/react-alert-dialog',
        '@radix-ui/react-accordion': '@radix-ui/react-accordion',
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
      sourcemap: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: false, // ترك console.logs لرؤية الرسائل
        },
      },
    },
    server: {
      port: 3000,
      open: true,
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL || 'https://syniery-code.onrender.com',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, '/api'),
          configure: (proxy, _options) => {
            proxy.on('error', (err, req, _res) => {
              console.log('🚨 [PROXY ERROR]', {
                error: err.message,
                url: req.url,
                method: req.method,
                timestamp: new Date().toISOString()
              });
            });

            proxy.on('proxyReq', (proxyReq, req, res) => {
              const requestId = Date.now();
              console.log('📤 [OUTGOING REQUEST]', {
                id: requestId,
                method: req.method,
                url: req.url,
                target: proxyReq.path,
                headers: proxyReq.getHeaders(),
                timestamp: new Date().toISOString()
              });

              // Capture request body
              if (req.body) {
                let body = '';
                req.on('data', (chunk) => {
                  body += chunk;
                });
                req.on('end', () => {
                  console.log('📝 [REQUEST BODY]', {
                    id: requestId,
                    body: body ? JSON.parse(body) : 'Empty body',
                    timestamp: new Date().toISOString()
                  });
                });
              }

              // Store request ID for response correlation
              (req as any).requestId = requestId;
            });

            proxy.on('proxyRes', (proxyRes, req, res) => {
              const requestId = (req as any).requestId || 'unknown';
              
              console.log('📥 [INCOMING RESPONSE]', {
                id: requestId,
                statusCode: proxyRes.statusCode,
                statusMessage: proxyRes.statusMessage,
                headers: proxyRes.headers,
                timestamp: new Date().toISOString()
              });

              // Capture response body
              const originalWrite = res.write;
              const originalEnd = res.end;
              
              const chunks: Buffer[] = [];

              res.write = function (chunk: any): boolean {
                chunks.push(Buffer.from(chunk));
                return originalWrite.apply(this, arguments as any);
              };

              res.end = function (chunk?: any): any {
                if (chunk) {
                  chunks.push(Buffer.from(chunk));
                }
                
                const body = Buffer.concat(chunks).toString('utf8');
                
                console.log('📄 [RESPONSE BODY]', {
                  id: requestId,
                  body: body ? safeJsonParse(body) : 'Empty body',
                  length: body.length,
                  timestamp: new Date().toISOString()
                });

                return originalEnd.apply(this, arguments as any);
              };
            });

            proxy.on('close', (req, socket, head) => {
              console.log('🔌 [CONNECTION CLOSED]', {
                url: req.url,
                method: req.method,
                timestamp: new Date().toISOString()
              });
            });
          },
        },
      },
    },
    preview: {
      port: 3000,
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL || 'https://syniery-code.onrender.com',
          changeOrigin: true,
          secure: false,
          configure: (proxy, _options) => {
            proxy.on('proxyReq', (proxyReq, req, res) => {
              console.log('🎯 [PREVIEW REQUEST]', {
                method: req.method,
                url: req.url,
                target: proxyReq.path,
                timestamp: new Date().toISOString()
              });
            });

            proxy.on('proxyRes', (proxyRes, req, res) => {
              console.log('🎯 [PREVIEW RESPONSE]', {
                statusCode: proxyRes.statusCode,
                url: req.url,
                timestamp: new Date().toISOString()
              });
            });
          },
        },
      },
    },
  };
});

// دالة مساعدة لتحليل JSON بأمان
function safeJsonParse(str: string) {
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
}