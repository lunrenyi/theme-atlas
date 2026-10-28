/**
 * Fails when a theme palette breaks WCAG AA for body text.
 * Run with: npm run contrast
 */
import { themes } from '../src/data/themes.ts';
import { auditContrast } from '../src/lib/color.ts';

const REQUIRED = ['textBg', 'mutedBg', 'textSurface', 'onAccent'];

const LABELS = {
  textBg: '正文 / 背景',
  mutedBg: '次要文字 / 背景',
  textSurface: '正文 / 面板',
  onAccent: '强调色上的文字 / 强调色',
  accentBg: '强调色 / 背景',
  borderBg: '分割线 / 背景',
};

let failed = 0;

for (const theme of themes) {
  const checks = auditContrast(theme);
  const problems = checks.filter((c) => REQUIRED.includes(c.key) && !c.pass);

  console.log('\n' + theme.title + '  [' + theme.slug + ']');
  for (const check of checks) {
    const mark = check.pass ? '  ok  ' : ' FAIL ';
    console.log(
      '  ' +
      mark +
      (LABELS[check.key] ?? check.key).padEnd(22) +
      String(check.ratio).padStart(6) +
      ':1   需要 ' +
      check.threshold,
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

