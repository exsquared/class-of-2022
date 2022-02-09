import { sortTextByFrequency, readInputFile, preprocessData, countWordFrequency, sortWordFrequencyCount } from './index';

describe("Test Case for Finding Word Frequency TOD", () => {
    describe("sortWordByFrequency()", () => {
        it("Should return 0 if undefined input is given.", () => {
            var inputFile;
            const expectedOutput = 0;
            const receivedOutput = sortTextByFrequency(inputFile);
            expect(receivedOutput).toBe(expectedOutput);
        });
        it("Should return 0 if no parameter is given.", () => {
            const expectedOutput = 0;
            const receivedOutput = sortTextByFrequency();
            expect(receivedOutput).toBe(expectedOutput);
        });
        it("Should return 0 if incorrect path is given.", () => {
            const inputFile = "data/crickets.txt";
            const inputFileType = 1;
            const expectedOutput = 0;
            const receivedOutput = sortTextByFrequency(inputFile, inputFileType);
            expect(receivedOutput).toBe(expectedOutput);
        });
        it("Should return 0 if inputFile is empty string.", () => {
            const inputFile = "";
            const inputFileType = 0;
            const expectedOutput = 0;
            const receivedOutput = sortTextByFrequency(inputFile, inputFileType);
            expect(receivedOutput).toBe(expectedOutput);
        });
        it("Should return correct answer if inputFile along with path is provided.", () => {
            const inputFile = "data/cricket.txt";
            const inputFileType = 1;
            const expectedOutput = "the:43, and:12, a:11, of:11, is:10, in:10, cricket:9, with:9, ball:8, by:8, which:6, to:6, international:6, wicket:5, side:5, two:4, each:4, matches:4, has:4, bat:3, played:3, field:3, at:3, they:3, are:3, it:3, test:3, game:2, between:2, teams:2, players:2, on:2, bails:2, stumps:2, batting:2, bowled:2, fielding:2, prevent:2, from:2, either:2, batter:2, when:2, hits:2, but:2, before:2, or:2, been:2, innings:2, who:2, team:2, overs:2, over:2, five:2, play:2, kit:2, wear:2, club:2, th:2, century:2, games:2, members:2, more:2, than:2, any:2, other:2, country:2, eleven:1, centre:1, yard:1, metre:1, pitch:1, end:1, comprising:1, balanced:1, three:1, scores:1, runs:1, striking:1, running:1, wickets:1, while:1, bowling:1, tries:1, this:1, preventing:1, leaving:1, getting:1, dismiss:1, so:1, out:1, means:1, dismissal:1, include:1, being:1, dislodges:1, catching:1, after:1, hit:1, ground:1, hitting:1, can:1, cross:1, crease:1, front:1, ten:1, batters:1, have:1, dismissed:1, ends:1, swap:1, roles:1, adjudicated:1, umpires:1, aided:1, third:1, umpire:1, match:1, referee:1, communicate:1, off:1, scorers:1, record:1, matchs:1, statistical:1, information:1, forms:1, range:1, twenty:1, for:1, single:1, days:1, traditionally:1, cricketers:1, all:1, white:1, limited:1, colours:1, addition:1, basic:1, some:1, protective:1, gear:1, injury:1, caused:1, hard:1, solid:1, spheroid:1, made:1, compressed:1, leather:1, slightly:1, raised:1, sewn:1, seam:1, enclosing:1, cork:1, core:1, layered:1, tightly:1, wound:1, string:1, earliest:1, reference:1, south:1, east:1, england:1, mid:1, spread:1, globally:1, expansion:1, british:1, empire:1, first:1, second:1, half:1, governing:1, body:1, council:1, icc:1, twelve:1, full:1, rules:1, laws:1, maintained:1, marylebone:1, mcc:1, london:1, sport:1, followed:1, primarily:1, indian:1, subcontinent:1, australasia:1, united:1, kingdom:1, southern:1, africa:1, west:1, indies:1, womens:1, organised:1, separately:1, also:1, achieved:1, standard:1, most:1, successful:1, playing:1, australia:1, won:1, seven:1, one:1, day:1, trophies:1, including:1, world:1, cups:1, top:1, rated:1";
            const receivedOutput = sortTextByFrequency(inputFile, inputFileType);
            expect(receivedOutput).toBe(expectedOutput);
        });
        it("Should return correct answer if inputFile along with path is provided.", () => {
            const inputFile = "data/rainbow.txt";
            const inputFileType = 1;
            const expectedOutput = "the:537, of:248, a:206, rainbow:157, and:140, is:128, in:127, to:108, light:73, rainbows:61, by:56, that:55, as:54, be:49, with:45, on:43, are:43, colours:42, from:41, it:40, at:39, for:36, water:35, or:35, sun:31, but:29, this:28, not:28, was:28, an:27, can:25, primary:24, than:24, angle:23, order:22, droplets:21, observer:21, secondary:20, he:20, reflection:19, arc:19, different:19, bow:19, more:19, spectrum:18, sky:18, reflected:18, supernumerary:18, red:17, seen:17, its:17, bands:17, when:16, explanation:16, may:16, bows:16, rays:15, al:15, above:14, one:14, colour:14, have:14, they:14, two:14, inside:13, back:13, because:13, much:13, which:13, horizon:13, see:12, white:12, blue:12, into:12, raindrop:12, their:12, caused:11, sunlight:11, only:11, number:11, circle:11, higher:11, also:11, first:11, visible:11, each:11, his:11, between:11, drop:11, raindrops:11, appear:10, full:10, however:10, eye:10, about:10, main:10, through:10, phenomenon:9, refracted:9, has:9, if:9, over:9, all:9, small:9, due:9, surface:9, below:9, violet:8, twinned:8, arcs:8, other:8, same:8, rain:8, less:8, glass:8, large:8, reflections:8, form:7, observers:7, droplet:7, then:7, circumhorizontal:7, circumzenithal:7, any:7, even:7, who:7, human:7, called:7, would:7, circular:7, point:7, were:7, very:7, rather:7, been:7, does:7, normal:7, theory:7, moon:7, produced:7, cloud:7, formed:6, part:6, side:6, double:6, second:6, outside:6, monochrome:6, optical:6, source:6, off:6, perceived:6, most:6, green:6, these:6, spray:6, there:6, drops:6, often:6, effect:6, sometimes:6, possible:6, glory:6, smaller:6, wavelength:6, angles:6, used:6, some:6, size:6, internal:6, up:6, well:6, slightly:6, explained:6, mirror:6, ibn:6, s:6, refraction:5, being:5, scientific:5, located:5, indigo:5, many:5, mist:5, created:5, observed:5, air:5, during:5, half:5, confused:5, sphere:5, out:5, top:5, therefore:5, around:5, centre:5, interference:5, since:5, suns:5, occur:5, where:5, phenomena:5, fog:5, before:5, common:5, n:5, refractions:5, dispersion:4, opposite:4, ground:4, derivation:4, under:4, titan:4, certain:4, cannot:4, direction:4, maximum:4, such:4, usually:4, result:4, appears:4, addition:4, rarely:4, moonbow:4, mm:4, using:4, system:4, th:4, bottom:4, compared:4, according:4, separate:4, after:4, formation:4, band:4, right:4, optics:4, create:4, axis:4, given:4, d:4, itself:4, rare:4, similar:4, should:4, difference:4, showed:4, could:4, them:4, high:4, like:4, creating:4, bright:4, body:4, article:4, both:4, work:4, model:4, circles:3, sees:3, centred:3, line:3, shows:3, inner:3, again:3, overview:3, visibility:3, mathematical:3, multiple:3, fogbow:3, culture:3, image:3, notes:3, end:3, distance:3, will:3, farther:3, photo:3, intensity:3, towards:3, commonly:3, newtons:3, orange:3, yellow:3, gave:3, forms:3, happen:3, dark:3, larger:3, fainter:3, near:3, lunar:3, perception:3, view:3, wide:3, several:3, entire:3, fairly:3, disc:3, radius:3, scattered:3, wavelengths:3, edge:3, scattering:3, able:3, based:3, hues:3, apparent:3, newton:3, eyes:3, later:3, seven:3, thought:3, known:3, solar:3, lying:3, pattern:3, particular:3, single:3, diameter:3, related:3, way:3, people:3, reflect:3, paths:3, reaches:3, reflects:3, parallel:3, luminance:3, infinity:3, upon:3, ray:3, liquid:3, together:3, exist:3, location:3, head:3, pointing:3, example:3, we:3, sin:3, coloured:3, concentric:3, present:3, while:3, flattening:3, photographed:3, nature:3, sunset:3, requirements:3, atmospheric:3, halo:3, ice:3, crystals:3, additional:3, become:3, fogbows:3, provided:3, reaching:3, orders:3, latter:3, almost:3, thin:3, halos:3, l:3, aristotles:3, book:3, concave:3, persian:3, polymath:3, did:3, place:3, modern:3, filled:3, resulting:2, takes:2, always:2, section:2, directly:2, illuminated:2, entering:2, leaving:2, reversed:2, variations:2, moonlight:2, history:2, comes:2, relative:2, thus:2, approached:2, impossible:2, customary:2, another:2, seems:2, distinct:2, artefact:2, vision:2, no:2, type:2, remembered:2, airborne:2, waterfall:2, shining:2, behind:2, low:2, clouds:2, spot:2, clear:2, background:2, conditions:2, day:2, visual:2, moonbows:2, photograph:2, camera:2, required:2, images:2, earth:2, aeroplane:2, brighter:2, depends:2, dependence:2, polarised:2, obtained:2, prism:2, century:2, musical:2, scale:2, greek:2, true:2, profile:2, isaac:2, color:2, never:2, merely:2, saturated:2, version:2, particularly:2, what:2, depend:2, language:2, uses:2, fewer:2, straight:2, spread:2, note:2, three:2, depending:2, incidence:2, diagram:2, relevant:2, causing:2, internally:2, exits:2, intense:2, refractive:2, index:2, so:2, naked:2, reason:2, hitting:2, ring:2, gets:2, returned:2, laser:2, brightness:2, tend:2, shorter:2, greater:2, undergo:2, total:2, coming:2, do:2, forming:2, viewpoint:2, composed:2, spherical:2, curved:2, set:2, cone:2, base:2, respect:2, law:2, yields:2, max:2, falls:2, area:2, down:2, described:2, shower:2, unlike:2, split:2, pastel:2, mainly:2, pink:2, purple:2, regular:2, cause:2, combination:2, fall:2, prominent:2, combine:2, produce:2, shape:2, rarer:2, case:2, position:2, meaning:2, normally:2, sunrise:2, lower:2, reach:2, met:2, viewer:2, away:2, circumstances:2, i:2, usual:2, becomes:2, broader:2, origin:2, classical:2, faint:2, within:2, phase:2, wave:2, thomas:2, young:2, frequently:2, least:2, counterparts:2, further:2, unto:2, dimmer:2, third:2, tertiary:2, fourth:2, quaternary:2, occurring:2, reported:2, published:2, laboratory:2, angular:2, positions:2, method:2, referred:2, enough:2, extensively:2, broad:2, found:2, world:2, instead:2, although:2, infrared:2, scholar:2, aristotle:2, centuries:2, c:2, philosopher:2, discusses:2, theories:2, including:2, sprayed:2, fuller:2, rods:2, account:2, reflecting:2, haytham:2, experimental:2, incorrect:2, kam:2, f:2, ris:2, theodoric:2, freiberg:2, haythams:2, placed:2, him:2, accurate:2, satisfactory:2, farisi:2, bacon:2, descartes:2, modification:2, mie:2, genesis:2, mythology:2, flood:2, gods:2, gold:2, meteorological:1, appearing:1, multicoloured:1, average:1, outer:1, contents:1, hide:1, gallery:1, references:1, external:1, links:1, jasper:1, national:1, park:1, specific:1, illusion:1, viewed:1, object:1, physically:1, indeed:1, degrees:1, span:1, continuous:1, banding:1, black:1, smooth:1, gradation:1, fading:1, cited:1, sequence:1, sevenfold:1, mnemonic:1, richard:1, york:1, battle:1, vain:1, roygbiv:1, include:1, dew:1, waves:1, whenever:1, altitude:1, western:1, morning:1, eastern:1, early:1, evening:1, spectacular:1, displays:1, still:1, raining:1, luminous:1, contrasts:1, darkened:1, good:1, inverse:1, waterfalls:1, fountains:1, artificially:1, dispersing:1, sunny:1, nighttime:1, strongly:1, moonlit:1, nights:1, poor:1, difficult:1, complete:1, semicircle:1, frame:1, require:1, lens:1, focal:1, length:1, now:1, software:1, stitching:1, panorama:1, available:1, easily:1, series:1, overlapping:1, frames:1, covering:1, scatters:1, overlaps:1, brightens:1, gives:1, rise:1, tangential:1, arch:1, continuum:1, without:1, distinguish:1, accordingly:1, munsell:1, numerically:1, describing:1, equal:1, steps:1, distinguishes:1, discreteness:1, exact:1, somewhat:1, arbitrary:1, choice:1, admitted:1, critical:1, distinguishing:1, originally:1, divided:1, five:1, included:1, giving:1, analogy:1, chose:1, divide:1, belief:1, derived:1, beliefs:1, ancient:1, sophists:1, connection:1, objects:1, days:1, week:1, middle:1, real:1, computed:1, unsaturated:1, asimov:1, list:1, seemed:1, me:1, worth:1, dignity:1, considered:1, my:1, deep:1, spectral:1, smearing:1, owing:1, fact:1, distribution:1, exit:1, unvarying:1, blurred:1, disk:1, neglected:1, width:1, especially:1, variable:1, word:1, inaccurately:1, mean:1, question:1, whether:1, everyone:1, idea:1, linguistic:1, relativity:1, suggestions:1, made:1, universality:1, recent:1, research:1, suggests:1, whose:1, words:1, seeing:1, discrete:1, enter:1, typically:1, fan:1, leave:1, surfaces:1, encountered:1, separates:1, encounters:1, enters:1, hits:1, once:1, continues:1, bounce:1, encounter:1, overall:1, incoming:1, range:1, independent:1, seawater:1, sea:1, misalignment:1, returning:1, turning:1, outermost:1, nearer:1, emitting:1, monochromatic:1, toward:1, ignoring:1, effects:1, caustic:1, finite:1, covers:1, degree:1, go:1, furthermore:1, amount:1, hence:1, emerges:1, original:1, incident:1, give:1, parts:1, diminish:1, emerge:1, spectra:1, emitted:1, blend:1, refract:1, constitutes:1, whole:1, axial:1, symmetry:1, lie:1, tip:1, shadow:1, unless:1, sufficiently:1, far:1, earths:1, alternatively:1, vantage:1, fountain:1, determine:1, subtends:1, follows:1, defining:1, snells:1, solving:1, get:1, arcsin:1, calculus:1, solve:1, substituting:1, earlier:1, equation:1, redirects:1, here:1, niagara:1, escapes:1, unlit:1, alexanders:1, alexander:1, aphrodisias:1, mild:1, twinning:1, streaks:1, left:1, consists:1, reversing:1, look:1, told:1, apart:1, consist:1, subdued:1, sizes:1, falling:1, resistance:1, flatten:1, showers:1, sized:1, numerical:1, tracing:1, study:1, mixture:1, resulted:1, meanwhile:1, branches:1, every:1, upper:1, diametrically:1, opposed:1, approaches:1, largest:1, viewing:1, requires:1, presence:1, level:1, either:1, absent:1, obstructed:1, landscape:1, building:1, aircraft:1, partial:1, standing:1, spraying:1, garden:1, hose:1, facing:1, processes:1, mistaken:1, contrast:1, enhanced:1, narrow:1, faintly:1, bordering:1, e:1, extra:1, stacker:1, detached:1, successively:1, along:1, consisting:1, involved:1, geometric:1, alternating:1, following:1, varying:1, lengths:1, reinforcing:1, constructive:1, others:1, cancelling:1, destructive:1, gap:1, patterns:1, differentiated:1, miniature:1, clearest:1, uniform:1, existence:1, historically:1, indication:1, complementary:1, originating:1, names:1, deflected:1, partially:1, puddles:1, quiet:1, close:1, curtain:1, intersects:1, eight:1, distinguished:1, simultaneously:1, non:1, unenhanced:1, occasionally:1, essentially:1, removed:1, dramatic:1, determined:1, results:1, theoretically:1, lost:1, subsequent:1, progressively:1, increasingly:1, harder:1, challenge:1, observing:1, respectively:1, drowned:1, glare:1, reasons:1, naturally:1, nevertheless:1, sightings:1, definitively:1, time:1, shortly:1, ever:1, pictures:1, fifth:1, quinary:1, setting:1, felix:1, billet:1, depicted:1, rose:1, observe:1, extremely:1, collimated:1, lasers:1, ng:1, et:1, argon:1, ion:1, beam:1, triple:1, quadruple:1, terms:1, erroneously:1, refer:1, yosemite:1, requiring:1, sensitive:1, long:1, exposure:1, photographs:1, show:1, diffract:1, reds:1, blues:1, discerned:1, dim:1, overlap:1, contact:1, cooler:1, chilled:1, anywhere:1, shine:1, big:1, yet:1, unrelated:1, circumscribed:1, appearance:1, lies:1, hexagonal:1, means:1, members:1, family:1, brightly:1, segments:1, zenith:1, notably:1, convex:1, downwards:1, impression:1, upside:1, runs:1, closer:1, significant:1, misnomer:1, fire:1, must:1, making:1, occurrence:1, latitudes:1, elevation:1, missed:1, occurs:1, overhead:1, suggested:1, might:1, saturns:1, wet:1, humid:1, fluid:1, cold:1, environment:1, methane:1, titans:1, hazy:1, skies:1, need:1, night:1, goggles:1, bc:1, devote:1, serious:1, attention:1, raymond:1, lee:1, alistair:1, b:1, fraser:1, despite:1, flaws:1, appeal:1, pythagorean:1, numerology:1, qualitative:1, inventiveness:1, consistency:1, unmatched:1, death:1, consisted:1, reaction:1, uncritical:1, naturales:1, quaestiones:1, ad:1, roman:1, seneca:1, younger:1, various:1, those:1, notices:1, rower:1, spat:1, clothes:1, stretched:1, pegs:1, hole:1, burst:1, pipe:1, speaks:1, virgulae:1, anticipating:1, experiences:1, prisms:1, shaped:1, favours:1, mysterious:1, virgae:1, parhelia:1, h:1, seyin:1, gazi:1, topdemir:1, physicist:1, alhazen:1, attempted:1, provide:1, maqala:1, fi:1, hala:1, wa:1, qaws:1, quzah:1, supposed:1, verify:1, allow:1, verification:1, repeated:1, averroes:1, though:1, groundwork:1, correct:1, explanations:1, contemporary:1, avicenna:1, alternative:1, writing:1, serves:1, simply:1, substance:1, quicksilver:1, lining:1, rear:1, change:1, holding:1, iridescence:1, subjective:1, sensation:1, accepts:1, arguments:1, song:1, dynasty:1, china:1, official:1, named:1, shen:1, kuo:1, hypothesised:1, sikong:1, encountering:1, paul:1, dong:1, writes:1, shens:1, basically:1, accord:1, principles:1, nader:1, el:1, bizri:1, astronomer:1, qutb:1, din:1, shirazi:1, elaborated:1, student:1, mathematically:1, proposed:1, twice:1, experiment:1, conducted:1, ignored:1, noted:1, kitab:1, tanqih:1, manazir:1, revision:1, vessel:1, obscura:1, controlled:1, aperture:1, introduction:1, projected:1, ultimately:1, deduced:1, trials:1, detailed:1, observations:1, decomposition:1, europe:1, translated:1, latin:1, studied:1, robert:1, grosseteste:1, continued:1, roger:1, wrote:1, opus:1, majus:1, experiments:1, showing:1, calculate:1, stated:1, summit:1, theoretical:1, noting:1, individual:1, moisture:1, ingress:1, egress:1, transmission:1, analysis:1, involving:1, ren:1, sketch:1, how:1, treatise:1, discourse:1, advanced:1, knowing:1, affect:1, experimented:1, passing:1, measuring:1, emerged:1, concluded:1, supported:1, conclusion:1, subsequently:1, independently:1, snell:1, correctly:1, calculated:1, mechanical:1, traditional:1, demonstrated:1, rejecting:1, led:1, major:1, features:1, corpuscular:1, unable:1, explain:1, until:1, realised:1, behaves:1, interfere:1, youngs:1, refined:1, george:1, biddell:1, airy:1, strength:1, physical:1, descriptions:1, gustav:1, advances:1, computational:1, methods:1, continue:1, lead:1, understanding:1, nussenzveig:1, provides:1, coat:1, arms:1, regen:1, germany:1, arts:1, earliest:1, literary:1, occurrences:1, story:1, noah:1, sign:1, covenant:1, destroy:1, life:1, global:1, norse:1, bridge:1, bifr:1, st:1, connects:1, men:1, midgard:1, realm:1, asgard:1, cuchavira:1, god:1, muisca:1, colombia:1, rains:1, bogot:1, savanna:1, thanked:1, offering:1, snails:1, emeralds:1, irish:1, leprechauns:1, secret:1, hiding:1, pot:1, said:1, appropriately:1, heraldry:1, too:1, characteristic:1, doesnt:1, really:1, fit:1, heraldic:1, style:1, flags:1, symbol:1, cooperative:1, movement:1, german:1, peasants:1, war:1, peace:1, italy:1, gay:1, pride:1, lgbt:1, social:1, movements:1, archbishop:1, desmond:1, tutu:1, president:1, nelson:1, mandela:1, newly:1, democratic:1, post:1, apartheid:1, south:1, africa:1, nation:1, technology:1, product:1, logos:1, apple:1, computer:1, logo:1, political:1, alliances:1, themselves:1, coalition:1";
            const receivedOutput = sortTextByFrequency(inputFile, inputFileType);
            expect(receivedOutput).toBe(expectedOutput);
        });
        it("Should return correct answer if only valid inputFile provided.", () => {
            const inputFile = "hello what are you doing doing you you are are are are";
            const inputFileType = 0;
            const expectedOutput = "are:5, you:3, doing:2, hello:1, what:1";
            const receivedOutput = sortTextByFrequency(inputFile, inputFileType);
            expect(receivedOutput).toBe(expectedOutput);
        });
        it("Should return correct answer if only valid inputFile provided.", () => {
            const inputFile = "from what are you you doing no no no";
            const inputFileType = 0;
            const expectedOutput = "no:3, you:2, from:1, what:1, are:1, doing:1";
            const receivedOutput = sortTextByFrequency(inputFile, inputFileType);
            expect(receivedOutput).toBe(expectedOutput);
        });
        it("Should return 0 if valid inputFile path is provided, but file is empty.", () => {
            const inputFile = "data/test-empty.txt";
            const inputFileType = 1;
            const expectedOutput = 0;
            const receivedOutput = sortTextByFrequency(inputFile, inputFileType);
            expect(receivedOutput).toBe(expectedOutput);
        });
    });
    describe("readInputFile()", () => {
        it("Should return null if inputFile is not given.", () => {
            const expectedOutput = null;
            const receivedOutput = readInputFile();
            expect(receivedOutput).toBe(expectedOutput);
        });
        it("Should return null if incorrect path is given.", () => {
            const inputFile = "data/crickets.txt";
            const inputFileType = 1;
            const expectedOutput = null;
            const receivedOutput = readInputFile(inputFile, inputFileType);
            expect(receivedOutput).toBe(expectedOutput);
        });
        it("Should return text if inputFile is valid.", () => {
            const inputFile = "data/test.txt";
            const inputFileType = 0;
            const expectedOutput = "from Twenty20, with {test} each team batting kenny's";
            const receivedOutput = readInputFile(inputFile, inputFileType);
            expect(receivedOutput).toBe(expectedOutput);
        });
    });
    describe("preprocessData()", () => {
        it("Should return empty string in array if input is empty string.", () => {
            const inputFile = "";
            const expectedOutput = '';
            const receivedOutput = preprocessData(inputFile);
            expect(receivedOutput).toStrictEqual(expectedOutput);
        });
        it("Should return text with all symbols removed if valid text is given.", () => {
            const inputFile = "test\r\n\r\r\r\\";
            const expectedOutput = 'test';
            const receivedOutput = preprocessData(inputFile);
            expect(receivedOutput).toStrictEqual(expectedOutput);
        });
        it("Should return text with all symbols removed if valid text is given.", () => {
            const inputFile = "hello, play with bat-and-ball and with me.";
            const expectedOutput = "hello play with bat and ball and with me";
            const receivedOutput = preprocessData(inputFile);
            expect(receivedOutput).toStrictEqual(expectedOutput);
        });
        it("Should return text with all symbols removed if valid text is given and has multiple consecutive spaces.", () => {
            const inputFile = "hello,   play with bat-and-ball and with me.";
            const expectedOutput = "hello play with bat and ball and with me";
            const receivedOutput = preprocessData(inputFile);
            expect(receivedOutput).toStrictEqual(expectedOutput);
        });
    });
    describe("countWordFrequency()", () => {
        it("Should return Map with single entry of empty string if input is empty string.", () => {
            const inputFile = "";
            const expectedOutput = new Map();
            expectedOutput.set("", 1);
            const receivedOutput = countWordFrequency(inputFile);
            expect(receivedOutput).toStrictEqual(expectedOutput);
        });
        it("Should return Map if input is is valid", () => {
            const inputFile = "from what are you you doing no no no";
            const expectedOutput = new Map();
            expectedOutput.set('from', 1);
            expectedOutput.set('what', 1);
            expectedOutput.set('are', 1);
            expectedOutput.set('you', 2);
            expectedOutput.set('doing', 1);
            expectedOutput.set('no', 3);
            const receivedOutput = countWordFrequency(inputFile);
            expect(receivedOutput).toStrictEqual(expectedOutput);
        });
    });
    describe("sortWordFrequencyCount()", () => {
        it("Should return sorted Map if a map is passed.", () => {
            const inputFile = new Map();
            inputFile.set('from', 1);
            inputFile.set('what', 2);
            inputFile.set('are', 1);
            inputFile.set('you', 2);
            const expectedOutput = new Map();
            expectedOutput.set('are', 1);
            expectedOutput.set('from', 1);
            expectedOutput.set('what', 2);
            expectedOutput.set('you', 2);
            const receivedOutput = sortWordFrequencyCount(inputFile);
            expect(receivedOutput).toStrictEqual(expectedOutput);
        });
    }); 
});