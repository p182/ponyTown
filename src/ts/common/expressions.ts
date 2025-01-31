import { Eye, Muzzle, Iris, ExpressionExtra } from './interfaces';
import { THREE_LETTER_WORDS, TWO_LETTER_WORDS } from './expressionUtils';

type Result = undefined | [Eye, Eye, Muzzle] | [Eye, Eye, Muzzle, Iris, Iris] | [Eye, Eye, Muzzle, Iris, Iris, ExpressionExtra];

export const expressions: [string, Result][] = [
	// invalid
	['', undefined],
	['a', undefined],
	['123', undefined],
	[':::', undefined],
	['XDK', undefined],
	['fooXD', undefined],
	[':) hey', undefined],
	['тот', undefined],
	// in text
	[' :) ', [Eye.Neutral, Eye.Neutral, Muzzle.Smile]],
	['hi :)', [Eye.Neutral, Eye.Neutral, Muzzle.Smile]],
	// horizontal (right)
	[':-)', [Eye.Neutral, Eye.Neutral, Muzzle.Smile]],
	[':)', [Eye.Neutral, Eye.Neutral, Muzzle.Smile]],
	['=)', [Eye.Neutral, Eye.Neutral, Muzzle.Smile]],
	[':]', [Eye.Neutral, Eye.Neutral, Muzzle.Smile]],
	[':>', [Eye.Neutral, Eye.Neutral, Muzzle.Smile]],
	[':}', [Eye.Neutral, Eye.Neutral, Muzzle.Smile]],
	[':3', [Eye.Neutral, Eye.Neutral, Muzzle.Smile]],
	['rus :з', [Eye.Neutral, Eye.Neutral, Muzzle.Smile]],
	['rus :э', [Eye.Neutral, Eye.Neutral, Muzzle.Smile]],
	[':(', [Eye.Sad, Eye.Sad, Muzzle.Frown]],
	[':[', [Eye.Sad, Eye.Sad, Muzzle.Frown]],
	[':C', [Eye.Sad, Eye.Sad, Muzzle.Frown]],
	[':c', [Eye.Sad, Eye.Sad, Muzzle.Frown]],
	['rus :С', [Eye.Sad, Eye.Sad, Muzzle.Frown]],
	['rus :с', [Eye.Sad, Eye.Sad, Muzzle.Frown]],
	[':<', [Eye.Sad, Eye.Sad, Muzzle.Frown]],
	[':{', [Eye.Sad, Eye.Sad, Muzzle.Frown]],
	[':I', [Eye.Neutral, Eye.Neutral, Muzzle.Scrunch]],
	[':t', [Eye.Neutral, Eye.Neutral, Muzzle.Scrunch]],
	[':T', [Eye.Neutral, Eye.Neutral, Muzzle.Scrunch]],
	['rus :Т', [Eye.Neutral, Eye.Neutral, Muzzle.Scrunch]],
	['rus :т', [Eye.Neutral, Eye.Neutral, Muzzle.Scrunch]],
	[':P', [Eye.Neutral, Eye.Neutral, Muzzle.Blep]],
	[':p', [Eye.Neutral, Eye.Neutral, Muzzle.Blep]],
	[':d', [Eye.Neutral, Eye.Neutral, Muzzle.Blep]],
	[':b', [Eye.Neutral, Eye.Neutral, Muzzle.FlatBlep]],
	['rus :Р', [Eye.Neutral, Eye.Neutral, Muzzle.Blep]],
	['rus :р', [Eye.Neutral, Eye.Neutral, Muzzle.Blep]],
	[':D', [Eye.Neutral, Eye.Neutral, Muzzle.SmileOpen]],
	[':DD', [Eye.Neutral, Eye.Neutral, Muzzle.SmileOpen2]],
	[':DDD', [Eye.Neutral, Eye.Neutral, Muzzle.SmileOpen3]],
	[':DDDDD', [Eye.Neutral, Eye.Neutral, Muzzle.SmileOpen3]],
	[':O', [Eye.Neutral, Eye.Neutral, Muzzle.ConcernedOpen2]],
	[':0', [Eye.Neutral, Eye.Neutral, Muzzle.ConcernedOpen]],
	[':o', [Eye.Neutral, Eye.Neutral, Muzzle.Oh]],
	[':|', [Eye.Neutral, Eye.Neutral, Muzzle.Flat]],
	[':l', [Eye.Neutral, Eye.Neutral, Muzzle.Flat]],
	[':i', [Eye.Neutral, Eye.Neutral, Muzzle.Flat]],
	[':v', [Eye.Neutral, Eye.Neutral, Muzzle.ConcernedOpen]],
	[':V', [Eye.Neutral, Eye.Neutral, Muzzle.FrownOpen]],
	[':u', [Eye.Neutral, Eye.Neutral, Muzzle.NeutralOpen2]],
	[':n', [Eye.Neutral, Eye.Neutral, Muzzle.NeutralOpen2]],
	[':U', [Eye.Neutral, Eye.Neutral, Muzzle.NeutralOpen3]],
	[':*', [Eye.Neutral, Eye.Neutral, Muzzle.Kiss]],
	[':x', [Eye.Neutral, Eye.Neutral, Muzzle.Kiss]],
	[':X', [Eye.Neutral, Eye.Neutral, Muzzle.Kiss]],
	[':/', [Eye.Neutral, Eye.Neutral, Muzzle.Concerned]],
	[':\\', [Eye.Neutral, Eye.Neutral, Muzzle.Concerned]],
	[':S', [Eye.Neutral, Eye.Neutral, Muzzle.Concerned]],
	[':s', [Eye.Neutral, Eye.Neutral, Muzzle.Concerned]],
	[':?', [Eye.Neutral, Eye.Neutral, Muzzle.Concerned]],
	['>:(', [Eye.Angry, Eye.Angry, Muzzle.Frown]],
	['>:<', [Eye.Angry, Eye.Angry, Muzzle.Frown]],
	['<:>', [Eye.Sad, Eye.Sad, Muzzle.Smile]],
	['XD', [Eye.X, Eye.X, Muzzle.SmileOpen]],
	['xD', [Eye.X, Eye.X, Muzzle.SmileOpen]],
	[':L', [Eye.Neutral, Eye.Neutral, Muzzle.NeutralPant]],
	[':Q', [Eye.Neutral, Eye.Neutral, Muzzle.SmilePant]],
	['B)', [Eye.Neutral3, Eye.Neutral3, Muzzle.Smile]],
	['8)', [Eye.Neutral, Eye.Neutral, Muzzle.Smile, Iris.Shocked, Iris.Shocked]],
	['>8)', [Eye.Angry, Eye.Angry, Muzzle.Smile, Iris.Shocked, Iris.Shocked]],
	['<:)', [Eye.Sad, Eye.Sad, Muzzle.Smile]],
	['>B)', [Eye.Angry2, Eye.Angry2, Muzzle.Smile]],
	['<B)', [Eye.Sad2, Eye.Sad2, Muzzle.Smile]],
	['|:)', [Eye.Frown, Eye.Frown, Muzzle.Smile]],
	['|B)', [Eye.Frown2, Eye.Frown2, Muzzle.Smile]],
	['|)', [Eye.Lines, Eye.Lines, Muzzle.Smile]],
	[':))', [Eye.Neutral, Eye.Neutral, Muzzle.SmileTeeth]],
	[':]]', [Eye.Neutral, Eye.Neutral, Muzzle.SmileTeeth]],
	[':||', [Eye.Neutral, Eye.Neutral, Muzzle.NeutralTeeth]],
	[':((', [Eye.Neutral, Eye.Neutral, Muzzle.FrownTeeth]],
	[':[[', [Eye.Neutral, Eye.Neutral, Muzzle.FrownTeeth]],
	['://', [Eye.Neutral, Eye.Neutral, Muzzle.ConcernedTeeth]],
	[':SS', [Eye.Neutral, Eye.Neutral, Muzzle.ConcernedTeeth]],
	[';)', [Eye.Closed, Eye.Neutral, Muzzle.Smile]],
	[';(', [Eye.Sad2, Eye.Sad2, Muzzle.Frown, Iris.Forward, Iris.Forward, ExpressionExtra.Tears]],
	['>;(', [Eye.Angry, Eye.Angry, Muzzle.Frown, Iris.Forward, Iris.Forward, ExpressionExtra.Tears]],
	['%)', [Eye.Neutral, Eye.Neutral, Muzzle.Smile, Iris.Forward, Iris.Up]],
	[`c':`, [Eye.Neutral, Eye.Neutral, Muzzle.Smile, Iris.Forward, Iris.Forward, ExpressionExtra.Tears]],
	[`:')`, [Eye.Neutral, Eye.Neutral, Muzzle.Smile, Iris.Forward, Iris.Forward, ExpressionExtra.Tears]],
	[`:'(`, [Eye.Sad, Eye.Sad, Muzzle.Frown, Iris.Forward, Iris.Forward, ExpressionExtra.Tears]],
	[`=,)`, [Eye.Neutral, Eye.Neutral, Muzzle.Smile, Iris.Forward, Iris.Forward, ExpressionExtra.Tears]],
	['=`)', [Eye.Neutral, Eye.Neutral, Muzzle.Smile, Iris.Forward, Iris.Forward, ExpressionExtra.Tears]],
	// TODO: :@ :y :'9
	// horizontal (left)
	['(-:', [Eye.Neutral, Eye.Neutral, Muzzle.Smile]],
	['|:', [Eye.Neutral, Eye.Neutral, Muzzle.Flat]],
	['(:', [Eye.Neutral, Eye.Neutral, Muzzle.Smile]],
	['[:', [Eye.Neutral, Eye.Neutral, Muzzle.Smile]],
	['c:', [Eye.Neutral, Eye.Neutral, Muzzle.Smile]],
	['C:', [Eye.Neutral, Eye.Neutral, Muzzle.Smile]],
	['rus с:', [Eye.Neutral, Eye.Neutral, Muzzle.Smile]],
	['rus С:', [Eye.Neutral, Eye.Neutral, Muzzle.Smile]],
	['):', [Eye.Sad, Eye.Sad, Muzzle.Frown]],
	['D:', [Eye.Sad, Eye.Sad, Muzzle.ConcernedOpen2]],
	['DD:', [Eye.Sad, Eye.Sad, Muzzle.ConcernedOpen3]],
	['DDDDD:', [Eye.Sad, Eye.Sad, Muzzle.ConcernedOpen3]],
	['D:<', [Eye.Angry, Eye.Angry, Muzzle.ConcernedOpen2]],
	['D8<', [Eye.Angry, Eye.Angry, Muzzle.ConcernedOpen2, Iris.Shocked, Iris.Shocked]],
	['):<', [Eye.Angry, Eye.Angry, Muzzle.Frown]],
	['v:', [Eye.Neutral, Eye.Neutral, Muzzle.ConcernedOpen]],
	['/:', [Eye.Neutral, Eye.Neutral, Muzzle.Concerned]],
	['(:>', [Eye.Sad, Eye.Sad, Muzzle.Smile]],
	['(:|', [Eye.Frown, Eye.Frown, Muzzle.Smile]],
	['(|', [Eye.Lines, Eye.Lines, Muzzle.Smile]],
	['((:', [Eye.Neutral, Eye.Neutral, Muzzle.SmileTeeth]],
	['[[:', [Eye.Neutral, Eye.Neutral, Muzzle.SmileTeeth]],
	['||:', [Eye.Neutral, Eye.Neutral, Muzzle.NeutralTeeth]],
	[')):', [Eye.Neutral, Eye.Neutral, Muzzle.FrownTeeth]],
	['(;', [Eye.Neutral, Eye.Closed, Muzzle.Smile]],
	// horizontal (invalid)
	['||', undefined],
	['|||', undefined],
	['>||', undefined],
	['>xD', undefined],
	['(X<', undefined],
	['x-x', undefined],
	// vertical
	['-_-', [Eye.Frown2, Eye.Frown2, Muzzle.Flat]],
	['-.-', [Eye.Frown2, Eye.Frown2, Muzzle.Kiss]],
	['-,-', [Eye.Frown2, Eye.Frown2, Muzzle.Kiss]],
	['^_^', [Eye.ClosedHappy2, Eye.ClosedHappy2, Muzzle.Flat]],
	['-_^', [Eye.Closed, Eye.ClosedHappy2, Muzzle.Flat]],
	['o_O', [Eye.Neutral2, Eye.Neutral, Muzzle.Flat]],
	['0_o', [Eye.Neutral, Eye.Neutral2, Muzzle.Flat]],
	['o_o', [Eye.Neutral, Eye.Neutral, Muzzle.Flat]],
	['o,o', [Eye.Neutral, Eye.Neutral, Muzzle.Kiss]],
	['ono', [Eye.Neutral, Eye.Neutral, Muzzle.Frown]],
	['O_O', [Eye.Neutral, Eye.Neutral, Muzzle.Flat, Iris.Shocked, Iris.Shocked]],
	['OoO', [Eye.Neutral, Eye.Neutral, Muzzle.ConcernedOpen, Iris.Shocked, Iris.Shocked]],
	['0_0', [Eye.Neutral, Eye.Neutral, Muzzle.Flat]],
	['°_°', [Eye.Neutral, Eye.Neutral, Muzzle.Flat]],
	['0.0', [Eye.Neutral, Eye.Neutral, Muzzle.Kiss]],
	['._.', [Eye.Neutral, Eye.Neutral, Muzzle.Flat]],
	[',_,', [Eye.Sad, Eye.Sad, Muzzle.Flat]],
	['v_V', [Eye.Closed, Eye.Closed, Muzzle.Flat]],
	['u_U', [Eye.Closed, Eye.Closed, Muzzle.Flat]],
	['n_n', [Eye.ClosedHappy, Eye.ClosedHappy, Muzzle.Flat]],
	['>_<', [Eye.X, Eye.X, Muzzle.Flat, Iris.Left, Iris.Right]],
	['>c<', [Eye.X, Eye.X, Muzzle.Smile, Iris.Left, Iris.Right]],
	[`'c'`, [Eye.Neutral, Eye.Neutral, Muzzle.Smile]],
	['-C-', [Eye.Closed, Eye.Closed, Muzzle.Smile]],
	['rus -с-', [Eye.Closed, Eye.Closed, Muzzle.Smile]],
	['-v-', [Eye.Closed, Eye.Closed, Muzzle.Smile]],
	['-V-', [Eye.Closed, Eye.Closed, Muzzle.Smile]],
	['-U-', [Eye.Closed, Eye.Closed, Muzzle.Smile]],
	['-u-', [Eye.Closed, Eye.Closed, Muzzle.Smile]],
	['-w-', [Eye.Closed, Eye.Closed, Muzzle.Smile]],
	['-W-', [Eye.Closed, Eye.Closed, Muzzle.Smile]],
	[`-👃-`, [Eye.Closed, Eye.Closed, Muzzle.Smile]],
	[`'_'`, [Eye.Neutral, Eye.Neutral, Muzzle.Flat]],
	[`-*-`, [Eye.Closed, Eye.Closed, Muzzle.Kiss]],
	[`-x-`, [Eye.Closed, Eye.Closed, Muzzle.Kiss]],
	[`-X-`, [Eye.Closed, Eye.Closed, Muzzle.Kiss]],
	[`>x<`, [Eye.X, Eye.X, Muzzle.Kiss, Iris.Left, Iris.Right]],
	[`-o-`, [Eye.Closed, Eye.Closed, Muzzle.ConcernedOpen]],
	[`-O-`, [Eye.Closed, Eye.Closed, Muzzle.ConcernedOpen2]],
	[`-0-`, [Eye.Closed, Eye.Closed, Muzzle.ConcernedOpen2]],
	[`^o^`, [Eye.ClosedHappy2, Eye.ClosedHappy2, Muzzle.SmileOpen2]],
	[`^O^`, [Eye.ClosedHappy2, Eye.ClosedHappy2, Muzzle.SmileOpen3]],
	[`-n-`, [Eye.Closed, Eye.Closed, Muzzle.Frown]],
	[`-m-`, [Eye.Closed, Eye.Closed, Muzzle.Frown]],
	[`-^-`, [Eye.Closed, Eye.Closed, Muzzle.Frown]],
	[`-~-`, [Eye.Closed, Eye.Closed, Muzzle.Concerned]],
	[`-3-`, [Eye.Closed, Eye.Closed, Muzzle.Kiss]],
	[`rus -з-`, [Eye.Closed, Eye.Closed, Muzzle.Kiss]],
	[`rus -э-`, [Eye.Closed, Eye.Closed, Muzzle.Kiss]],
	[`-q-`, [Eye.Closed, Eye.Closed, Muzzle.NeutralPant]],
	[`-p-`, [Eye.Closed, Eye.Closed, Muzzle.NeutralPant]],
	[`-P-`, [Eye.Closed, Eye.Closed, Muzzle.SmilePant]],
	[`-Q-`, [Eye.Closed, Eye.Closed, Muzzle.SmilePant]],
	[`-A-`, [Eye.Closed, Eye.Closed, Muzzle.ConcernedOpen2]],
	[`q-q`, [Eye.Sad, Eye.Sad, Muzzle.Neutral, Iris.Forward, Iris.Forward, ExpressionExtra.Cry]],
	[`p-p`, [Eye.Sad, Eye.Sad, Muzzle.Neutral, Iris.Forward, Iris.Forward, ExpressionExtra.Cry]],
	[`p-q`, [Eye.Sad, Eye.Sad, Muzzle.Neutral, Iris.Forward, Iris.Forward, ExpressionExtra.Cry]],
	[`rus р-р`, [Eye.Sad, Eye.Sad, Muzzle.Neutral, Iris.Forward, Iris.Forward, ExpressionExtra.Cry]],
	[`;-;`, [Eye.Sad, Eye.Sad, Muzzle.Neutral, Iris.Forward, Iris.Forward, ExpressionExtra.Cry]],
	[`:-:`, [Eye.Sad, Eye.Sad, Muzzle.Neutral]],
	[`P-P`, [Eye.Sad, Eye.Sad, Muzzle.Neutral, Iris.Forward, Iris.Forward, ExpressionExtra.Cry]],
	[`rus Р-Р`, [Eye.Sad, Eye.Sad, Muzzle.Neutral, Iris.Forward, Iris.Forward, ExpressionExtra.Cry]],
	[`t-t`, [Eye.Peaceful, Eye.Peaceful, Muzzle.Neutral]],
	[`Т_Т`, [Eye.Peaceful, Eye.Peaceful, Muzzle.Flat, Iris.Forward, Iris.Forward, ExpressionExtra.Cry]],
	[`rus Т_т`, [Eye.Peaceful, Eye.Peaceful, Muzzle.Flat, Iris.Forward, Iris.Forward, ExpressionExtra.Cry]],
	[`Q-Q`, [Eye.Sad, Eye.Sad, Muzzle.Neutral, Iris.Shocked, Iris.Shocked, ExpressionExtra.Cry]],
	[`y-y`, [Eye.Closed, Eye.Closed, Muzzle.Neutral, Iris.Forward, Iris.Forward, ExpressionExtra.Cry]],
	[`Y-Y`, [Eye.Closed, Eye.Closed, Muzzle.Neutral, Iris.Forward, Iris.Forward, ExpressionExtra.Cry]],
	[`у-у`, [Eye.Closed, Eye.Closed, Muzzle.Neutral, Iris.Forward, Iris.Forward, ExpressionExtra.Cry]],
	[`У-У`, [Eye.Closed, Eye.Closed, Muzzle.Neutral, Iris.Forward, Iris.Forward, ExpressionExtra.Cry]],
	[`ò_ó`, [Eye.Angry, Eye.Angry, Muzzle.Flat]],
	[`ó_ò`, [Eye.Sad, Eye.Sad, Muzzle.Flat]],
	[`ô_ô`, [Eye.Frown, Eye.Frown, Muzzle.Flat]],
	[`õ_õ`, [Eye.Frown, Eye.Frown, Muzzle.Flat]],
	[`ō_ō`, [Eye.Frown, Eye.Frown, Muzzle.Flat]],
	[`ŏ_ŏ`, [Eye.Frown, Eye.Frown, Muzzle.Flat]],
	[`Ò_Ó`, [Eye.Angry, Eye.Angry, Muzzle.Flat, Iris.Shocked, Iris.Shocked]],
	[`Ô_Ô`, [Eye.Frown, Eye.Frown, Muzzle.Flat, Iris.Shocked, Iris.Shocked]],
	[`Õ_Õ`, [Eye.Frown, Eye.Frown, Muzzle.Flat, Iris.Shocked, Iris.Shocked]],
	[`Ō_Ō`, [Eye.Frown, Eye.Frown, Muzzle.Flat, Iris.Shocked, Iris.Shocked]],
	[`Ŏ_Ŏ`, [Eye.Frown, Eye.Frown, Muzzle.Flat, Iris.Shocked, Iris.Shocked]],
	[`=_=`, [Eye.Neutral4, Eye.Neutral4, Muzzle.Flat]],
	[`a_a`, [Eye.Frown2, Eye.Frown2, Muzzle.Flat]],
	[`e_e`, [Eye.Neutral, Eye.Neutral, Muzzle.Flat, Iris.UpLeft, Iris.UpLeft]],
	[`е_е`, [Eye.Neutral, Eye.Neutral, Muzzle.Flat, Iris.UpLeft, Iris.UpLeft]],
	[`g_g`, [Eye.Neutral, Eye.Neutral, Muzzle.Flat, Iris.UpRight, Iris.UpRight]],
	[`9_9`, [Eye.Neutral, Eye.Neutral, Muzzle.Flat, Iris.Up, Iris.Up]],
	[`6_9`, [Eye.Neutral, Eye.Neutral, Muzzle.Flat, Iris.Forward, Iris.Up]],
	['>_>', [Eye.Neutral2, Eye.Neutral2, Muzzle.Flat, Iris.Left, Iris.Left]],
	['<_<', [Eye.Neutral2, Eye.Neutral2, Muzzle.Flat, Iris.Right, Iris.Right]],
	['<_>', [Eye.Neutral2, Eye.Neutral2, Muzzle.Flat, Iris.Right, Iris.Left]],
	['d_d', [Eye.Neutral, Eye.Neutral, Muzzle.Flat, Iris.Right, Iris.Right]],
	['b_b', [Eye.Neutral, Eye.Neutral, Muzzle.Flat, Iris.Left, Iris.Left]],
	['twO', [Eye.Peaceful, Eye.Neutral, Muzzle.Smile]],
	['o//o', [Eye.Neutral, Eye.Neutral, Muzzle.Neutral, Iris.Forward, Iris.Forward, ExpressionExtra.Blush]],
	['o/////o', [Eye.Neutral, Eye.Neutral, Muzzle.Neutral, Iris.Forward, Iris.Forward, ExpressionExtra.Blush]],
	['o\\\\o', [Eye.Neutral, Eye.Neutral, Muzzle.Neutral, Iris.Forward, Iris.Forward, ExpressionExtra.Blush]],
	['o\\\\\\o', [Eye.Neutral, Eye.Neutral, Muzzle.Neutral, Iris.Forward, Iris.Forward, ExpressionExtra.Blush]],
	['>//<', [Eye.X, Eye.X, Muzzle.Neutral, Iris.Left, Iris.Right, ExpressionExtra.Blush]],
	['-//v//-', [Eye.Closed, Eye.Closed, Muzzle.Smile, Iris.Forward, Iris.Forward, ExpressionExtra.Blush]],
	['-///v///-', [Eye.Closed, Eye.Closed, Muzzle.Smile, Iris.Forward, Iris.Forward, ExpressionExtra.Blush]],
	[';//v//;', [Eye.Sad, Eye.Sad, Muzzle.Smile, Iris.Forward, Iris.Forward, ExpressionExtra.Blush | ExpressionExtra.Cry]],
	[`6_6`, [Eye.Neutral, Eye.Neutral, Muzzle.Flat, Iris.Down, Iris.Down]],
	['6.6', [Eye.Neutral, Eye.Neutral, Muzzle.Kiss, Iris.Down, Iris.Down]],
	['bcd', [Eye.Neutral, Eye.Neutral, Muzzle.Smile, Iris.Down, Iris.Down]],
	// TODO: o-o' o-o' ~_~ @_@ o=o oyo *_* (amazed) -_-/ -_-\ D_D
	// vertical (short)
	['^^', [Eye.ClosedHappy2, Eye.ClosedHappy2, Muzzle.Smile]],
	['))', [Eye.Neutral, Eye.Neutral, Muzzle.Smile]],
	['((', [Eye.Neutral, Eye.Neutral, Muzzle.Frown]],
	['<<', [Eye.Neutral2, Eye.Neutral2, Muzzle.Flat, Iris.Right, Iris.Right]],
	['>>', [Eye.Neutral2, Eye.Neutral2, Muzzle.Flat, Iris.Left, Iris.Left]],
	// vertical (invalid)
	...[
		'---',
		'...',
		'000',
		'QQQ',
		'One',
		'Up.',
		'UP.',
		...THREE_LETTER_WORDS,
		...THREE_LETTER_WORDS.map(x => x.toUpperCase()),
		...TWO_LETTER_WORDS.map(x => x + '.'),
		...TWO_LETTER_WORDS.map(x => x + ','),
		...TWO_LETTER_WORDS.map(x => x + '-'),
		...TWO_LETTER_WORDS.map(x => x + '*'),
	].map(x => [x, undefined] as [string, any]),
	['BS', undefined],
	['x8', undefined],
	['8x', undefined],
	['xx', undefined],
	['-//c-', undefined],
	['-c//-', undefined],
	['030', undefined],
	['80', undefined],
	// other
	[`aaaaa`, [Eye.Neutral, Eye.Neutral, Muzzle.ConcernedOpen3]],
	[`AAAAAA`, [Eye.Neutral, Eye.Neutral, Muzzle.ConcernedOpen3, Iris.Shocked, Iris.Shocked]],
	[`aaaaa...`, [Eye.Neutral, Eye.Neutral, Muzzle.ConcernedOpen3]],
	[`zzz`, [Eye.Closed, Eye.Closed, Muzzle.Neutral]],
	[`ZZZZZ`, [Eye.Closed, Eye.Closed, Muzzle.Neutral]],
	[`zzz...`, [Eye.Closed, Eye.Closed, Muzzle.Neutral]],
	// emoji
	['🙂', [Eye.Neutral, Eye.Neutral, Muzzle.Smile]],
	['😵', [Eye.Neutral, Eye.Neutral, Muzzle.Smile, Iris.Up, Iris.Forward]],
	['😐', [Eye.Neutral, Eye.Neutral, Muzzle.Flat]],
	['😑', [Eye.Lines, Eye.Lines, Muzzle.Flat]],
	['😆', [Eye.X, Eye.X, Muzzle.SmileOpen]],
	['😟', [Eye.Sad, Eye.Sad, Muzzle.Neutral]],
	['😠', [Eye.Angry, Eye.Angry, Muzzle.Smile]],
	['🤔', [Eye.Neutral, Eye.Frown2, Muzzle.Kiss]],
	['😈', [Eye.Angry, Eye.Angry, Muzzle.Smile, Iris.Up, Iris.Forward]],
	['👿', [Eye.Angry, Eye.Angry, Muzzle.SmileTeeth]],
	// unsafe faces
	[':L', [Eye.Neutral, Eye.Neutral, Muzzle.NeutralPant]],
	[':Q', [Eye.Neutral, Eye.Neutral, Muzzle.SmilePant]],
	// safe replacements
	[':u', [Eye.Neutral, Eye.Neutral, Muzzle.NeutralOpen2]],
	[':DD', [Eye.Neutral, Eye.Neutral, Muzzle.SmileOpen2]],
];
