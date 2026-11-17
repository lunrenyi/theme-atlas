import type {
  CodexPreviewDesign,
  PaletteRole,
  ToolPreviewDesign,
  VimPreviewDesign,
} from './types';

const vim = (
  layout: VimPreviewDesign['layout'],
  currentLine: PaletteRole,
  selection: PaletteRole,
): VimPreviewDesign => ({
  layout,
  currentLine,
  selection,
  divider: 'border',
});

const codex = (
  layout: CodexPreviewDesign['layout'],
  diffAdded: PaletteRole,
  diffRemoved: PaletteRole,
  promptAccent: PaletteRole,
): CodexPreviewDesign => ({
  layout,
  diffAdded,
  diffRemoved,
  promptAccent,
  divider: 'border',
});

/** Vim and Codex layout/diff choices. Syntax colours live in syntaxPalettes.ts. */
export const previewDesigns: Record<string, ToolPreviewDesign> = {
  'taotie-cinnabar': {
    vim: vim('classic', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'muted', 'accent'),
  },
  'nuwa-five-stones': {
    vim: vim('compact', 'surface', 'accent'),
    codex: codex('split', 'accent', 'muted', 'accent'),
  },
  'baize-omens': {
    vim: vim('compact', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'muted', 'accent'),
  },
  'qitian-pojie': {
    vim: vim('focus', 'surface', 'accent'),
    codex: codex('split', 'accent', 'flare', 'accent'),
  },
  'pangu-creation': {
    vim: vim('focus', 'surface', 'accent'),
    codex: codex('split', 'accent', 'flare', 'accent'),
  },
  'xingtian-war-dance': {
    vim: vim('classic', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'flare', 'accent'),
  },
  'qixi-magpie-bridge': {
    vim: vim('compact', 'surface', 'accent'),
    codex: codex('split', 'accent', 'flare', 'accent'),
  },
  'eight-immortals-crossing': {
    vim: vim('classic', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'muted', 'flare'),
  },
  'nezha-lotus-flame': {
    vim: vim('focus', 'surface', 'accent'),
    codex: codex('split', 'accent', 'flare', 'accent'),
  },
  'yangjian-celestial-eye': {
    vim: vim('compact', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'flare', 'accent'),
  },
  'ru-ware-sky': {
    vim: vim('compact', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'muted', 'accent'),
  },
  'jun-ware-violet': {
    vim: vim('classic', 'surface', 'accent'),
    codex: codex('split', 'accent', 'muted', 'accent'),
  },
  'jingdezhen-blue-white': {
    vim: vim('classic', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'muted', 'accent'),
  },
  'longquan-meizi-green': {
    vim: vim('classic', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'muted', 'accent'),
  },
  'dehua-china-white': {
    vim: vim('focus', 'surface', 'accent'),
    codex: codex('split', 'accent', 'muted', 'accent'),
  },
  'famille-rose-bloom': {
    vim: vim('compact', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'muted', 'accent'),
  },
  'deep-space-orbit': {
    vim: vim('focus', 'surface', 'accent'),
    codex: codex('split', 'accent', 'muted', 'accent'),
  },
  'pathfinder-beacon': {
    vim: vim('compact', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'muted', 'accent'),
  },
  'singularity-echo': {
    vim: vim('focus', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'muted', 'accent'),
  },
  'yaoshi-everlasting-bough': {
    vim: vim('compact', 'surface', 'accent'),
    codex: codex('split', 'accent', 'flare', 'accent'),
  },
  'lan-reignbow-arbiter': {
    vim: vim('classic', 'surface', 'accent'),
    codex: codex('split', 'accent', 'muted', 'accent'),
  },
  'aha-cosmic-farce': {
    vim: { ...vim('focus', 'accent', 'accent'), example: 'aha-reprise' },
    codex: {
      ...codex('stacked', 'accent', 'muted', 'flare'),
      example: 'aha-reprise',
      fileName: 'src/eternal-theatre.ts',
      dialogue: {
        user:
          'Model the three acts of an endless theatre, preserving laughter, tears and the choice to begin again.',
        assistant:
          'Mapped desire, absurdity and reprise. The final act keeps both masks and asks for consent before another roll.',
        status: 'Rehearsing eternal-theatre.ts · 3 acts',
        conclusion: 'The stage is ready. Pain remains in the script; the next performance is a choice.',
        input: 'Roll the dice for another performance...',
      },
    },
  },
  'ix-silent-event-horizon': {
    vim: vim('compact', 'surface', 'accent'),
    codex: codex('split', 'accent', 'muted', 'flare'),
  },
  'qlipoth-amber-rampart': {
    vim: vim('classic', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'muted', 'accent'),
  },
  'nous-cosmic-computation': {
    vim: { ...vim('focus', 'surface', 'accent'), example: 'nous-deduction' },
    codex: {
      ...codex('stacked', 'accent', 'muted', 'accent'),
      example: 'nous-deduction',
      fileName: 'src/observation.ts',
      dialogue: {
        user:
          'Inspect these star-map observations, identify anomalous variables, and provide a reproducible derivation.',
        assistant:
          'Identified 128 observation variables. Found 3 anomalous correlations. Validating constraints...',
        status: 'Tracing derivation path · 128 nodes',
        conclusion:
          'Conclusion: the observation model requires correction. Derivation record generated.',
        input: 'Request another derivation...',
      },
    },
  },
  'fuli-crystal-river': {
    vim: { ...vim('compact', 'surface', 'accent'), example: 'fuli-memory' },
    codex: {
      ...codex('stacked', 'accent', 'muted', 'flare'),
      example: 'fuli-memory',
      fileName: 'src/memory-archive.ts',
      dialogue: {
        user:
          'Inspect this batch of memory-crystal fragments, order them chronologically, and identify missing records.',
        assistant:
          'Read 248 memory fragments. Found 3 missing time indices. Rebuilding associations...',
        status: 'Restoring memory index · 248 fragments',
        conclusion: 'Index restored. All fragments are preserved.',
        input: 'Request another memory audit...',
      },
    },
  },
  'xipe-thousandfold-chorus': {
    vim: { ...vim('compact', 'surface', 'accent'), example: 'xipe-chorus' },
    codex: {
      ...codex('stacked', 'accent', 'muted', 'accent'),
      example: 'xipe-chorus',
      fileName: 'src/chorus-harmony.ts',
      dialogue: {
        user:
          'Analyse three signals from different planets, identify the rhythm differences, and generate a coordination plan.',
        assistant:
          'Identified 3 independent voice parts. Found 2 rhythmic deviations. Calibrating phase alignment...',
        status: 'Aligning chorus phases · 3 signals',
        conclusion: 'Harmony plan generated. All signals are synchronised.',
        input: 'Request another harmony plan...',
      },
    },
  },
  'uncharted-reach': {
    vim: vim('focus', 'surface', 'accent'),
    codex: codex('split', 'accent', 'flare', 'accent'),
  },
  'frozen-front': {
    vim: vim('classic', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'flare', 'accent'),
  },
  'crimson-iron-curtain': {
    vim: vim('compact', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'flare', 'accent'),
  },
  'koprulu-frontier': {
    vim: vim('focus', 'surface', 'accent'),
    codex: codex('split', 'accent', 'flare', 'accent'),
  },
  'echoes-of-khala': {
    vim: vim('classic', 'surface', 'accent'),
    codex: codex('split', 'accent', 'flare', 'accent'),
  },
  'spore-tide': {
    vim: vim('compact', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'flare', 'accent'),
  },
  'kevin-ashes-deliverance': {
    vim: { ...vim('focus', 'accent', 'accent'), example: 'kevin-deliverance' },
    codex: {
      ...codex('split', 'accent', 'muted', 'flare'),
      example: 'kevin-deliverance',
      fileName: 'src/deliverance.ts',
      dialogue: {
        user: 'Model a path through the long winter while preserving the final ember beneath the ice.',
        assistant: 'Mapped the frozen record, the forward path and one guarded ember. Checking the next dawn checkpoint...',
        status: 'Tracing deliverance path · 1 ember preserved',
        conclusion: 'The past remains sealed. The ember is carried forward; the path to dawn stays open.',
        input: 'Continue toward the next dawn...',
      },
    },
  },
  'elysia-garden-ego': {
    vim: { ...vim('classic', 'accent', 'accent'), example: 'elysia-garden' },
    codex: {
      ...codex('split', 'accent', 'muted', 'accent'),
      example: 'elysia-garden',
      fileName: 'src/crystal-garden.ts',
      dialogue: {
        user: 'Compose a crystal flower with layered refractions and preserve each drifting memory shard.',
        assistant: 'Arranged 6 crystal petals, 3 light paths and a flock of geometric butterflies. Balancing the farewell scene...',
        status: 'Refracting garden light · 6 petals',
        conclusion: 'The bloom is complete. Every shard remains unique; none needs to become permanent to be beautiful.',
        input: 'Let the garden bloom once more...',
      },
    },
  },
  'mobius-ouroboros-infinite': {
    vim: { ...vim('compact', 'accent', 'accent'), example: 'mobius-evolution' },
    codex: {
      ...codex('stacked', 'accent', 'muted', 'flare'),
      example: 'mobius-evolution',
      fileName: 'src/evolution-loop.ts',
      dialogue: {
        user: 'Model cellular evolution across successive generations and expose each new boundary for inspection.',
        assistant: 'Linked the helix, cell division and generational states. Adding a bounded observer for the infinite cycle...',
        status: 'Observing evolution loop · generation 6',
        conclusion: 'The cycle continues, but every generation remains inspectable. The next boundary is ready.',
        input: 'Observe another generation...',
      },
    },
  },
};
