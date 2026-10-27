/**
 * Fails when a theme palette breaks WCAG AA for body text.
 * Run with: npm run contrast
 */
import { themes } from '../src/data/themes.ts';
import { auditContrast } from '../src/lib/color.ts';

const REQUIRED = ['正文 / 背景', '次要文字 / 背景', '正文 / 面板', '强调色上的文字 / 强调色'];

let failed = 0;

for (const theme of themes) {
  const checks = auditContrast(theme);
  const problems = checks.filter((c) => REQUIRED.includes(c.label) && !c.pass);

  console.log('\n' + theme.title + '  [' + theme.slug + ']');
  for (const check of checks) {
    const mark = check.pass ? '  ok  ' : ' FAIL ';
    console.log(
      '  ' + mark + check.label.padEnd(22) + String(check.ratio).padStart(6) + ':1   需要 ' + check.threshold,
    );
  }
  if (problems.length) {
    failed += problems.length;
    console.log('  -> ' + problems.length + ' 项未通过 AA。');
  }
}

console.log(
  '\n' + (failed === 0 ? '全部主题通过 WCAG AA 正文对比度检查。' : failed + ' 项未通过。'),
);
process.exit(failed === 0 ? 0 : 1);

