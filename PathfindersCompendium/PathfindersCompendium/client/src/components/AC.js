import { ListGroupItemHeading } from "reactstrap";
import { InformationDataContext } from "../providers/InformationDataProvider";

const Information = {
  SR: (
    <>
      <p>
        <ListGroupItemHeading>
          <b>Spell Resistance (SR)</b>
        </ListGroupItemHeading>
      </p>
      <p>
        Some creatures are resistant to magic and gain spell resistance. When a
        creature with spell resistance is targeted by a spell, the caster of the
        spell must make a caster level check to see if the spell affects the
        target. The DC of this check is equal to the target creature’s SR (some
        spells do not allow SR checks).
      </p>
    </>
  ),
  Melee: (
    <>
      <p>
        <ListGroupItemHeading>
          <b>Melee Attack</b>
        </ListGroupItemHeading>
      </p>
      <p>
        An attack in hand-to-hand combat. A basic melee attack is a d20 roll +
        base attack bonus + Strength modifier + any related or magical bonuses.
      </p>
    </>
  ),
  CMD: (
    <>
      <p>
        <ListGroupItemHeading>
          <b>Combat Maneuver Defense (CMD)</b>
        </ListGroupItemHeading>
      </p>
      <p>
        Combat Maneuver Defense represents how hard it is to perform a combat
        maneuver against this creature. A creature’s CMD is used as the
        difficulty class when performing a maneuver against that creature.
      </p>
    </>
  ),
  CMB: (
    <>
      <p>
        <ListGroupItemHeading>
          <b>Combat Maneuver Bonus (CMB)</b>
        </ListGroupItemHeading>
      </p>
      <p>
        Combat Maneuver Bonus represents how skilled a creature is at performing
        a combat maneuver. When attempting to perform a combat maneuver, this
        value is added to the character’s d20 roll.
      </p>
    </>
  ),
  BAB: (
    <>
      <p>
        <ListGroupItemHeading>
          <b>Base Attack Bonus (BAB)</b>
        </ListGroupItemHeading>
      </p>
      <p>
        Each creature has a base attack bonus and it represents its skill in
        combat. As a character gains levels or Hit Dice, his base attack bonus
        improves. When a creature’s base attack bonus reaches +6, +11, or +16,
        he receives an additional attack in combat when he takes a full-attack
        action (which is one type of full-round action).
      </p>
    </>
  ),
  AbilityScores: (
    <>
      <p>
        <ListGroupItemHeading>
          <b>Ability Scores</b>
        </ListGroupItemHeading>
      </p>
      <p>
        Each character has six ability scores that represent his character’s
        most basic attributes. They are his raw talent and prowess. While a
        character rarely rolls a check using just an ability score, these
        scores, and the modifiers they create, affect nearly every aspect of a
        character’s skills and abilities. Each ability score generally ranges
        from 3 to 18, although racial bonuses and penalties can alter this; an
        average ability score is 10.{" "}
      </p>
    </>
  ),
  Skills: (
    <>
      <p>
        <ListGroupItemHeading>
          <b>Skills</b>
        </ListGroupItemHeading>
      </p>
      <p>
        Skills represent some of the most basic and yet most fundamental
        abilities your character possesses. As your character advances in level,
        he can gain new skills and improve his existing skills dramatically.
        This section describes each skill, including common uses and typical
        modifiers. Characters can sometimes use skills for purposes other than
        those noted here, at the GM’s discretion.
      </p>
    </>
  ),
  Alignment: (
    <>
      <p>
        <ListGroupItemHeading>
          <b>Alignment</b>
        </ListGroupItemHeading>
      </p>
      <p>
        This game assumes good and evil are definitive things. Evidence for this
        outlook can be found in the indicated good or evil monster subtypes,
        spells that detect good and evil, and spells that have the good or evil
        descriptor. Characters using spells with the evil descriptor should
        consider themselves to be committing minor acts of evil, though using
        spells to create undead is an even more grievous act of evil that
        requires atonement. Creatures with an evil subtype (generally outsiders)
        are creatures that are fundamentally evil: devils, daemons, and demons,
        for instance. Their redemption is rare, if it is even possible. They are
        evil to their very core, and commit evil acts perpetually and
        persistently. Mortals with an evil alignment, however, are different
        from these beings. In fact, having an evil alignment alone does not make
        one a super-villain or even require one to be thwarted or killed. The
        extent of a character’s evil alignment might be a lesser evil, like
        selfishness, greed, or extreme vanity. Having these qualities might not
        even cause the character to detect as evil when subjected to detect
        evil, as creatures possessing 4 or fewer Hit Dice do not register to the
        spell (with the exception of clerics or other characters that radiate an
        aura).
      </p>
      <p>
        A creature’s general moral and personal attitudes are represented by its
        alignment: lawful good, neutral good, chaotic good, lawful neutral,
        neutral, chaotic neutral, lawful evil, neutral evil, or chaotic evil.
      </p>
      <p>
        Alignment is a tool for developing your character’s identity—it is not a
        straitjacket for restricting your character. Each alignment represents a
        broad range of personality types or personal philosophies, so two
        characters of the same alignment can still be quite different from each
        other. In addition, few people are completely consistent.
      </p>
      <p>
        All creatures have an alignment and alignment determines the
        effectiveness of some spells and magic items.
      </p>
      <p>
        Animals and other creatures incapable of moral action are neutral. Even
        deadly vipers and tigers that eat people are neutral because they lack
        the capacity for morally right or wrong behavior. Dogs may be obedient
        and cats free-spirited, but they do not have the moral capacity to be
        truly lawful or chaotic.
      </p>
      <p>
        <ListGroupItemHeading>
          <b>Good Versus Evil</b>
        </ListGroupItemHeading>
      </p>
      <p>
        Good characters and creatures protect innocent life. Evil characters and
        creatures debase or destroy innocent life, whether for fun or profit.
      </p>
      <p>
        <b>Good</b> Good implies altruism, respect for life, and a concern for
        the dignity of sentient beings. Good characters make personal sacrifices
        to help others.
      </p>
      <p>
        <b>Evil</b> Evil implies hurting, oppressing, and killing others. Some
        evil creatures simply have no compassion for others and kill without
        qualms if doing so is convenient. Others actively pursue evil, killing
        for sport or out of duty to some evil deity or master.
      </p>
      <p>
        <b>Neutral</b> People who are neutral with respect to good and evil have
        compunctions against killing the innocent, but may lack the commitment
        to make sacrifices to protect or help others.
      </p>
      <p>
        <ListGroupItemHeading>
          <b>Law Versus Chaos</b>
        </ListGroupItemHeading>
      </p>
      <p>
        Lawful characters tell the truth, keep their word, respect authority,
        honor tradition, and judge those who fall short of their duties. Chaotic
        characters follow their consciences, resent being told what to do, favor
        new ideas over tradition, and do what they promise if they feel like it.
      </p>
      <p>
        <b>Law</b> Law implies honor, trustworthiness, obedience to authority,
        and reliability. On the downside, lawfulness can include
        closed-mindedness, reactionary adherence to tradition,
        self-righteousness, and a lack of adaptability. Those who consciously
        promote lawfulness say that only lawful behavior creates a society in
        which people can depend on each other and make the right decisions in
        full confidence that others will act as they should.
      </p>
      <p>
        <b>Chaos</b> Chaos implies freedom, adaptability, and flexibility. On
        the downside, chaos can include recklessness, resentment toward
        legitimate authority, arbitrary actions, and irresponsibility. Those who
        promote chaotic behavior say that only unfettered personal freedom
        allows people to express themselves fully and lets society benefit from
        the potential that its individuals have within them.
      </p>
      <p>
        <b>Neutral</b> Someone who is neutral with respect to law and chaos has
        some respect for authority and feels neither a compulsion to obey nor a
        compulsion to rebel. She is generally honest, but can be tempted into
        lying or deceiving others.
      </p>
    </>
  ),
  knowledgeArcana: (
    <>
      <p>
        <ListGroupItemHeading>
          Knowledge (Int; Trained Only)
        </ListGroupItemHeading>
      </p>
      <p>
        Contents [show] You are educated in a field of study and can answer both
        simple and complex questions. Like the Craft, Perform, and Profession
        skills, Knowledge actually encompasses a number of different
        specialties.
      </p>
      <p>
        Below are listed typical fields of study.
        <ul>
          <li>
            <b>Arcana</b> (ancient mysteries, magic traditions, arcane symbols,
            constructs, dragons, magical beasts); Although robots are
            constructs, Knowledge (arcana) cannot be used to identify robots or
            their abilities and weaknesses.
          </li>
          <li>
            <b>Dungeoneering</b> (aberrations, caverns, oozes, spelunking)
          </li>
          <li>
            <b>Engineering</b> (buildings, aqueducts, bridges, fortifications);
            This is the most important skill with regard to technological
            subjects. Knowledge (engineering) can be used to identify a robot’s
            abilities and weaknesses. Knowledge (engineering) is also used to
            identify and understand unknown technological objects in a similar
            manner to how Spellcraft is used to identify the properties of a
            magic item. The DC to correctly identify and understand an unknown
            technological object is equal to the object’s Craft DC. An object
            with a Craft DC of 15 or less can be automatically identified and
            understood by someone trained in Knowledge (engineering) who also
            has the Technologist feat.
          </li>
          <li>
            <b>Geography</b> (lands, terrain, climate, people); Used for
            astronomy.
          </li>
          <li>
            <b>History</b> (wars, colonies, migrations, founding of cities)
          </li>
          <li>
            <b>Local</b> (legends, personalities, inhabitants, laws, customs,
            traditions, humanoids)
          </li>
          <li>
            <b>Nature</b> (animals, fey, monstrous humanoids, plants, seasons
            and cycles, weather, vermin)
          </li>
          <li>
            <b>Nobility</b> (lineages, heraldry, personalities, royalty)
          </li>
          <li>
            <b>Planes</b> (the Inner Planes, the Outer Planes, the Astral Plane,
            the Ethereal Plane, outsiders, planar magic)
          </li>
          <li>
            <b>Religion</b> (gods and goddesses, mythic history, ecclesiastic
            tradition, holy symbols, undead)
          </li>
        </ul>
      </p>
      <p>
        <ListGroupItemHeading>Common Uses</ListGroupItemHeading>
      </p>
      <p>
        <b>General Knowledge</b>
      </p>
      <p>
        Answering a question within your field of study has a DC of 10 (for
        really easy questions), 15 (for basic questions), or 20 to 30 (for
        really tough questions).
      </p>
      <p>
        <b>Monster Lore</b>
      </p>
      <p>
        You can use this skill to identify monsters and their special powers or
        vulnerabilities.
      </p>
    </>
  ),
  intimidate: (
    <>
      <p>
        <ListGroupItemHeading>Intimidate (Cha)</ListGroupItemHeading>
      </p>
      <p>
        You can use this skill to frighten your opponents or to get them to act
        in a way that benefits you. This skill includes verbal threats and
        displays of prowess.
      </p>
      <p>
        <b>
          <ListGroupItemHeading>Common Uses</ListGroupItemHeading>
        </b>
      </p>
      <p>
        <b>Coerce Opponent</b>
      </p>
      <p>
        Sometimes you need to cow someone into submission for more than just a
        few hours.
      </p>
      <p>
        <b>Action:</b> Coercing a target into acting friendly for hours takes
        1d4 × 10 minutes. Coercing a target into acting friendly for days
        requires you to successfully use coercion at least once per week for 1d6
        weeks without failing any Intimidate checks against the target during
        that time.
      </p>
      <p>
        <b>Check:</b> By spending more time threatening or harassing a target,
        you can attempt to force a creature to act friendly toward you for 1d6
        hours + 1 hour for every 5 points by which you exceed the DC. If you
        succeed at such a check against the same target at least once per week
        for 1d6 weeks (without ever failing any Intimidate checks against the
        target during that time), the duration of the coercion increases to 2d8
        days. Coercion is overt, not subtle, and in most cases using coercion
        against a creature is an evil act.
      </p>
      <p>
        A coerced target acts as though friendly toward you even when you aren’t
        around, but the aid offered remains grudging at best. The target’s true
        attitude is hostile, and if the target believes it can take an action to
        hinder you that can’t be traced back to it, it’s likely to take such
        opportunities.
      </p>
      <p>
        Creatures attempting to enlist its aid against you can often do so by
        convincing the target they are able to protect it from your wrath, using
        the normal Diplomacy rules.
      </p>
      <p>
        <b>Demoralize Opponent</b>
      </p>
      <p>
        You can use this skill to cause an opponent to become shaken for a
        number of rounds. This shaken condition doesn’t stack with other shaken
        conditions to make an affected creature frightened. The DC of this check
        is equal to 10 + the target’s Hit Dice + the target’s Wisdom modifier.
      </p>
      <ul>
        <li></li>
      </ul>
    </>
  ),
  handleAnimal: (
    <>
      <p>
        <ListGroupItemHeading>
          Handle Animal (Cha; Trained Only)
        </ListGroupItemHeading>
      </p>
      <p>
        You are trained at working with animals, and can teach them tricks, get
        them to follow your simple commands, or even domesticate them.
      </p>
      <p>
        <b>
          <ListGroupItemHeading>Common Uses</ListGroupItemHeading>
        </b>
      </p>
      <p>
        <b>Handle an Animal</b>
      </p>
      <p>
        This task involves commanding an animal to perform a task or trick that
        it knows. If the animal is wounded or has taken any nonlethal damage or
        ability score damage, the DC increases by 2. If your check succeeds, the
        animal performs the task or trick on its next action.
      </p>
      <p>
        <b>Push An Animal</b>
      </p>
      <p>
        To push an animal means to get it to perform a task or trick that it
        doesn’t know but is physically capable of performing. This category also
        covers making an animal perform a forced march or forcing it to hustle
        for more than 1 hour between sleep cycles. If the animal is wounded or
        has taken any nonlethal damage or ability score damage, the DC increases
        by 2. If your check succeeds, the animal performs the task or trick on
        its next action.
      </p>
      <p>
        <b>Teach an Animal a Trick</b>
      </p>
      <p>
        You can teach an animal a specific trick with one week of work and a
        successful Handle Animal check against the indicated DC. An animal with
        an Intelligence score of 1 can learn a maximum of three tricks, while an
        animal with an Intelligence score of 2 can learn a maximum of six
        tricks.
      </p>
    </>
  ),
  fly: (
    <>
      <p>
        <ListGroupItemHeading>
          Fly (Dex; Armor Check Penalty)
        </ListGroupItemHeading>
      </p>
      <p>
        You are skilled at flying, either through the use of wings or magic, and
        you can perform daring or complex maneuvers while airborne. Note that
        this skill does not give you the ability to fly.
      </p>
      <p>
        <b>Special Requirement</b>
      </p>
      <p>
        You cannot take this skill without a natural means of flight or gliding.
        Creatures can also take ranks in Fly if they possess a reliable means of
        flying every day (either through a spell or other magical manner, such
        as a druid’s wild shape ability).
      </p>
    </>
  ),
  escapeArtist: (
    <>
      <p>
        <ListGroupItemHeading>
          Escape Artist (Dex; Armor Check Penalty)
        </ListGroupItemHeading>
      </p>
      <p>Your training allows you to slip bonds and escape from grapples.</p>
      <p>
        <u>
          <b>Common Uses</b>
        </u>
      </p>
      <p>
        <b>Escape Ropes</b>
      </p>
      <p>
        The DC of your Escape Artist check is equal to the binder’s combat
        maneuver bonus +20.
      </p>
      <p>
        <b>Escape Manacles</b>
      </p>
      <p>
        The DC to escape normal manacles is 30. The DC to escape masterwork
        manacles is 35.
      </p>
    </>
  ),
  disguise: (
    <>
      <p>
        <ListGroupItemHeading>Disguise (Cha)</ListGroupItemHeading>
      </p>
      <p>You are skilled at changing your appearance.</p>
      <p>
        <b>Check</b>
      </p>
      <p>
        Your Disguise check result determines how good the disguise is, and it
        is opposed by others’ Perception check results. If you don’t draw any
        attention to yourself, others do not get to make Perception checks. If
        you come to the attention of people who are suspicious (such as a guard
        who is watching commoners walking through a city gate), it can be
        assumed that such observers are taking 10 on their Perception checks.
      </p>
      <p>
        You get only one Disguise check per use of the skill, even if several
        people are making Perception checks against it. The Disguise check is
        made secretly, so that you can’t be sure how good the result is.
      </p>
      <p>
        The effectiveness of your disguise depends in part on how much you’re
        attempting to change your appearance.
      </p>
    </>
  ),
  disableDevice: (
    <>
      <p>
        <ListGroupItemHeading>
          Disable Device (Dex; Armor Check Penalty; Trained Only)
        </ListGroupItemHeading>
      </p>
      <p>
        You are skilled at disarming traps and opening locks. In addition, this
        skill lets you sabotage simple mechanical devices, such as catapults,
        wagon wheels, and doors.
      </p>
      <p>
        <u>
          <b>Common Uses</b>
        </u>
      </p>
      <p>
        <b>Disarm Trap or Device</b>
      </p>
      <p>
        When disarming a trap or other device, the Disable Device check is made
        secretly, so that you don’t necessarily know whether you’ve succeeded.
      </p>
      <p>
        <b>Open A Lock</b>
      </p>
      <p>
        The DC to open a lock depends on the lock’s quality: <b>simple</b> (DC
        20),
        <b>average</b> (DC 25), <b>good</b> (DC 30), or <b>superior</b> (DC 40).
      </p>
    </>
  ),
  diplomacy: (
    <>
      <p>
        <ListGroupItemHeading>Diplomacy (Cha)</ListGroupItemHeading>
      </p>
      <p>
        You can use this skill to persuade others to agree with your arguments,
        to resolve differences, and to gather valuable information or rumors
        from people. This skill is also used to negotiate conflicts by using the
        proper etiquette and manners suitable to the problem.
      </p>
      <p>
        <ListGroupItemHeading>
          <b>Common Uses</b>
        </ListGroupItemHeading>
      </p>
      <p>
        <b>Gather Information</b>
      </p>
      <p>
        You can use Diplomacy to gather information about a specific topic or
        individual. To do this, you must spend at least 1d4 hours canvassing
        people at local taverns, markets, and gathering places. The DC of this
        check depends on the obscurity of the information sought, but for most
        commonly known facts or rumors it is 10. For obscure or secret
        knowledge, the DC might increase to 20 or higher. The GM might rule that
        some topics are simply unknown to common folk.
      </p>
    </>
  ),
  craft: (
    <>
      <p>
        <b>Craft (Int)</b>
      </p>
      <p>
        You are skilled in the creation of a specific group of items, such as
        armor or weapons. Like Knowledge, Perform, and Profession, Craft is
        actually a number of separate skills. You could have several Craft
        skills, each with its own ranks. The most common Craft skills are
        alchemy, armor, baskets, books, bows, calligraphy, carpentry, cloth,
        clothing, glass, jewelry, leather, locks, paintings, pottery,
        sculptures, ships, shoes, stonemasonry, traps, and weapons.
      </p>
      <p>
        A Craft skill is specifically focused on creating something. If nothing
        is created by the endeavor, it probably falls under the heading of a
        Profession skill.
      </p>
      <p>
        <u>
          <b>Common Uses</b>
        </u>
      </p>
      <p>
        <b>Practice Trade</b>
      </p>
      <p>
        You can practice your trade and make a decent living, earning half your
        check result in gold pieces per week of dedicated work. You know how to
        use the tools of your trade, how to perform the craft’s daily tasks, how
        to supervise untrained helpers, and how to handle common problems.
        (Untrained laborers and assistants earn an average of 1 silver piece per
        day.)
      </p>
      <p>
        <b>Make Something</b>
      </p>
      <p>
        The basic function of the Craft skill, however, is to allow you to make
        an item of the appropriate type. The DC depends on the complexity of the
        item to be created. The DC, your check result, and the price of the item
        determine how long it takes to make a particular item. The item’s
        finished price also determines the cost of raw materials.
      </p>
    </>
  ),
  SavingThrows: (
    <>
      <p>
        <b>Saving Throws</b>
      </p>
      <p>
        Generally, when you are subject to an unusual or magical attack, you get
        a Saving Throw to avoid or reduce the effect. Like an attack roll, a
        Saving Throw is a d20 roll plus a bonus based on your class and level
        (see Classes), and an associated Ability Score. Your Saving Throw
        modifier is:
        <p>
          <b>Base save bonus + ability modifier</b>
        </p>
      </p>
      <p>
        <i>Fortitude:</i> These saves measure your ability to stand up to
        physical punishment or attacks against your vitality and health. Apply
        your Constitution modifier to your Fortitude saving throws.
      </p>
      <p>
        <i>Reflex:</i> These saves test your ability to dodge area attacks and
        unexpected situations. Apply your Dexterity modifier to your Reflex
        saving throws.
      </p>
      <p>
        <i>Will:</i> These saves reflect your Resistance to mental influence as
        well as many magical effects. Apply your Wisdom modifier to your Will
        saving throws.
      </p>
      <p>
        <b>Automatic Failures and Successes:</b> A natural 1 (the d20 comes up
        1) on a Saving Throw is always a failure (and may cause Damage to
        exposed items; see Items Surviving after a Saving Throw). A natural 20
        (the d20 comes up 20) is always a success.
      </p>
    </>
  ),
  Rogue: (
    <>
      <p>
        <ListGroupItemHeading>
          <b>Rogue</b>
        </ListGroupItemHeading>
      </p>
      <p>
        Life is an endless adventure for those who live by their wits. Ever just
        one step ahead of danger, rogues bank on their cunning, skill, and charm
        to bend fate to their favor. Never knowing what to expect, they prepare
        for everything, becoming masters of a wide variety of skills, training
        themselves to be adept manipulators, agile acrobats, shadowy stalkers,
        or masters of any of dozens of other professions or talents. Thieves and
        gamblers, fast talkers and diplomats, bandits and bounty hunters, and
        explorers and investigators all might be considered rogues, as well as
        countless other professions that rely upon wits, prowess, or luck.
        Although many rogues favor cities and the innumerable opportunities of
        civilization, some embrace lives on the road, journeying far, meeting
        exotic people, and facing fantastic danger in pursuit of equally
        fantastic riches. In the end, any who desire to shape their fates and
        live life on their own terms might come to be called rogues.
      </p>
      <p>
        <b>Role:</b> Rogues excel at moving about unseen and catching foes
        unaware, and tend to avoid head-to-head combat. Their varied skills and
        abilities allow them to be highly versatile, with great variations in
        expertise existing between different rogues. Most, however, excel in
        overcoming hindrances of all types, from unlocking doors and disarming
        traps to outwitting magical hazards and conning dull-witted opponents.
      </p>
    </>
  ),
  Bard: (
    <>
      <p>
        <ListGroupItemHeading>
          <b>Bard</b>
        </ListGroupItemHeading>
      </p>
      <p>
        Untold wonders and secrets exist for those skillful enough to discover
        them. Through cleverness, talent, and magic, these cunning few unravel
        the wiles of the world, becoming adept in the arts of persuasion,
        manipulation, and inspiration. Typically masters of one or many forms of
        artistry, bards possess an uncanny ability to know more than they should
        and use what they learn to keep themselves and their allies ever one
        step ahead of danger. Bards are quick-witted and captivating, and their
        skills might lead them down many paths, be they gamblers or
        jacks-of-all-trades, scholars or performers, leaders or scoundrels, or
        even all of the above. For bards, every day brings its own
        opportunities, adventures, and challenges, and only by bucking the odds,
        knowing the most, and being the best might they claim the treasures of
        each.
      </p>
      <p>
        <b>Role:</b> Bards capably confuse and confound their foes while
        inspiring their allies to ever-greater daring. While accomplished with
        both weapons and magic, the true strength of bards lies outside melee,
        where they can support their companions and undermine their foes without
        fear of interruptions to their performances.
      </p>
    </>
  ),
  Wizard: (
    <>
      <p>
        <ListGroupItemHeading>Wizard</ListGroupItemHeading>
      </p>
      <p>
        Beyond the veil of the mundane hide the secrets of absolute power. The
        works of beings beyond mortals, the legends of realms where gods and
        spirits tread, the lore of creations both wondrous and terrible—such
        mysteries call to those with the ambition and the intellect to rise
        above the common folk to grasp true might. Such is the path of the
        wizard. These shrewd magic-users seek, collect, and covet esoteric
        knowledge, drawing on cultic arts to work wonders beyond the abilities
        of mere mortals. While some might choose a particular field of magical
        study and become masters of such powers, others embrace versatility,
        reveling in the unbounded wonders of all magic. In either case, wizards
        prove a cunning and potent lot, capable of smiting their foes,
        empowering their allies, and shaping the world to their every desire.
      </p>
      <p>
        <b>Role:</b> While universalist wizards might study to prepare
        themselves for any manner of danger, specialist wizards research schools
        of magic that make them exceptionally skilled within a specific focus.
        Yet no matter their specialty, all wizards are masters of the impossible
        and can aid their allies in overcoming any danger.
      </p>
    </>
  ),
  Barbarian: (
    <>
      <p>
        <ListGroupItemHeading>Barbarian</ListGroupItemHeading>
      </p>
      <p>
        For some, there is only rage. In the ways of their people, in the fury
        of their passion, in the howl of battle, conflict is all these brutal
        souls know. Savages, hired muscle, masters of vicious martial
        techniques, they are not soldiers or professional warriors—they are the
        battle possessed, creatures of slaughter and spirits of war. Known as
        barbarians, these warmongers know little of training, preparation, or
        the rules of warfare; for them, only the moment exists, with the foes
        that stand before them and the knowledge that the next moment might hold
        their death. They possess a sixth sense in regard to danger and the
        endurance to weather all that might entail. These brutal warriors might
        rise from all walks of life, both civilized and savage, though whole
        societies embracing such philosophies roam the wild places of the world.
        Within barbarians storms the primal spirit of battle, and woe to those
        who face their rage.
      </p>
      <p>
        <b>Role:</b> Barbarians excel in combat, possessing the martial prowess
        and fortitude to take on foes seemingly far superior to themselves. With
        rage granting them boldness and daring beyond that of most other
        warriors, barbarians charge furiously into battle and ruin all who would
        stand in their way.
      </p>
    </>
  ),
  climb: (
    <>
      <p>
        <b>Climb (Str; Armor Check Penalty)</b>
      </p>
      <p>
        You are skilled at scaling vertical surfaces, from smooth city walls to
        rocky cliffs.
      </p>
      <p>
        <b>Check</b>
      </p>
      <p>
        With a successful Climb check, you can advance up, down, or across a
        slope, wall, or other steep incline (or even across a ceiling, provided
        it has handholds) at one-quarter your normal speed. A slope is
        considered to be any incline at an angle measuring less than 60 degrees;
        a wall is any incline at an angle measuring 60 degrees or more. A Climb
        check that fails by 4 or less means that you make no progress, and one
        that fails by 5 or more means that you fall from whatever height you
        have already attained. The DC of the check depends on the conditions of
        the climb. Compare the task with those on the following table to
        determine an appropriate DC.
      </p>
      <p>
        You need both hands free to climb, but you may cling to a wall with one
        hand while you cast a spell or take some other action that requires only
        one hand. While climbing, you can’t move to avoid a blow, so you lose
        your Dexterity bonus to AC (if any). You also can’t use a shield while
        climbing. Anytime you take damage while climbing, make a Climb check
        against the DC of the slope or wall. Failure means you fall from your
        current height and sustain the appropriate falling damage.
      </p>
    </>
  ),
  bluff: (
    <>
      <p>
        <b>Bluff (Cha)</b>
      </p>
      <p>You know how to tell a lie.</p>
      <p>
        <b>Check</b>
      </p>
      <p>
        Bluff is an opposed skill check against your opponent’s Sense Motive
        skill.
      </p>
    </>
  ),
  appraise: (
    <>
      <p>
        <b>Appraise (Int)</b>
      </p>
      <p>You can evaluate the monetary value of an object.</p>
      <p>
        <b>Appraise Value of Item</b>
      </p>
      <p>
        A DC 20 Appraise check determines the value of a common item. If you
        succeed by 5 or more, you also determine if the item has magic
        properties, although this success does not grant knowledge of the magic
        item’s abilities. If you fail the check by less than 5, you determine
        the price of that item to within 20% of its actual value. If you fail
        this check by 5 or more, the price is wildly inaccurate, subject to GM
        discretion. Particularly rare or exotic items might increase the DC of
        this check by 5 or more.
      </p>
      <p>
        You can also use this check to determine the most valuable item visible
        in a treasure hoard. The DC of this check is generally 20 but can
        increase to as high as 30 for a particularly large hoard.
      </p>
    </>
  ),
  acrobatics: (
    <>
      <p>
        <b>Acrobatics (Dex; Armor Check Penalty)</b>
      </p>
      <p>
        You can keep your balance while traversing narrow or treacherous
        surfaces. You can also dive, flip, jump, and roll, avoiding attacks and
        confusing your opponents.
      </p>
    </>
  ),
  cha: (
    <>
      <p>
        <b>Charisma (Cha)</b>
      </p>
      <p>
        Charisma measures a character's personality, personal magnetism, ability
        to lead, and appearance. It is the most important ability for paladins,
        sorcerers, and bards. It is also important for clerics, since it affects
        their ability to channel energy. For Undead creatures, Charisma is a
        measure of their unnatural “lifeforce.” Every Creature has a Charisma
        score. A character with a Charisma score of 0 is not able to exert
        himself in any way and is unconscious.
      </p>
      <p>
        You apply your character's Charisma modifier to:
        <ul>
          <li>
            Bluff, Diplomacy, Disguise, Handle Animal, Intimidate, Perform, and
            Use Magic Device checks.
          </li>
          <li>Checks that represent attempts to influence others.</li>
          <li>
            Channel energy DCs for clerics and paladins attempting to harm
            Undead foes.
          </li>
        </ul>
      </p>
      <p>
        Bards, paladins, and sorcerers gain a number of bonus Spells based on
        their Charisma scores. The minimum Charisma score needed to cast a bard,
        Paladin, or Sorcerer spell is 10 + the spell's level.
      </p>
    </>
  ),
  wis: (
    <>
      <p>
        <b>Wisdom (Wis)</b>
      </p>
      <p>
        Wisdom describes a character’s willpower, common sense, awareness, and
        intuition. Wisdom is the most important ability for clerics and druids,
        and it is also important for monks and rangers. If you want your
        character to have acute senses, put a high score in Wisdom. Every
        creature has a Wisdom score. A character with a Wisdom score of 0 is
        incapable of rational thought and is unconscious.
      </p>
      <p>
        You apply your character’s Wisdom modifier to:
        <ul>
          <li>
            Will saving throws (for negating the effects of charm person and
            other spells).
          </li>
          <li>
            Heal, Perception, Profession, Sense Motive, and Survival checks.
          </li>
        </ul>
      </p>
      <p>
        Clerics, druids, and rangers get bonus spells based on their Wisdom
        scores. The minimum Wisdom score needed to cast a cleric, druid, or
        ranger spell is 10 + the spell’s level.
      </p>
    </>
  ),
  int: (
    <>
      <p>
        <b>Intelligence (Int)</b>
      </p>
      <p>
        Intelligence determines how well your character learns and reasons. This
        ability is important for wizards because it affects their spellcasting
        ability in many ways. Creatures of animal-level instinct have
        Intelligence scores of 1 or 2. Any creature capable of understanding
        speech has a score of at least 3. A character with an Intelligence score
        of 0 is comatose. Some creatures do not possess an Intelligence score.
        Their modifier is +0 for any Intelligence-based skills or checks.
      </p>
      <p>
        You apply your character’s Intelligence modifier to:
        <ul>
          <li>
            The number of bonus languages your character knows at the start of
            the game. These are in addition to any starting racial languages and
            Common. If you have a penalty, you can still read and speak your
            racial languages unless your Intelligence is lower than 3.
          </li>
          <li>
            The number of skill points gained each level, though your character
            always gets at least 1 skill point per level.
          </li>
          <li>
            Appraise, Craft, Knowledge, Linguistics, and Spellcraft checks.
          </li>
        </ul>
      </p>
      <p>
        A wizard gains bonus spells based on his Intelligence score. The minimum
        Intelligence score needed to cast a wizard spell is 10 + the spell’s
        level.
      </p>
    </>
  ),
  con: (
    <>
      <p>
        <b>Constitution (Con)</b>
      </p>
      <p>
        Constitution represents your character’s health and stamina. A
        Constitution bonus increases a character’s hit points, so the ability is
        important for all classes. Some creatures, such as undead and
        constructs, do not have a Constitution score. Their modifier is +0 for
        any Constitution-based checks. A character with a Constitution score of
        0 is dead.
      </p>
      <p>
        You apply your character’s Constitution modifier to:
        <ul>
          <li>
            Each roll of a Hit Die (though a penalty can never drop a result
            below 1—that is, a character always gains at least 1 hit point each
            time he advances in level).
          </li>
          <li>
            Fortitude saving throws, for resisting poison, disease, and similar
            threats.
          </li>
        </ul>
      </p>
      <p>
        If a character’s Constitution score changes enough to alter his or her
        Constitution modifier, the character’s hit points also increase or
        decrease accordingly.
      </p>
    </>
  ),
  dex: (
    <>
      <p>
        <b>Dexterity (Dex)</b>
      </p>
      <p>
        Dexterity measures agility, reflexes, and balance. This ability is the
        most important one for rogues, but it’s also useful for characters who
        wear light or medium armor or no armor at all. This ability is vital for
        characters seeking to excel with ranged weapons, such as the bow or
        sling. A character with a Dexterity score of 0 is incapable of moving
        and is effectively immobile (but not unconscious).
      </p>
      <p>
        You apply your character’s Dexterity modifier to:
        <ul>
          <li>
            Ranged attack rolls, including those for attacks made with bows,
            crossbows, throwing axes, and many ranged spell attacks like
            scorching ray or searing light.
          </li>
          <li>
            Armor Class (AC), provided that the character can react to the
            attack.
          </li>
          <li>
            Reflex saving throws, for avoiding fireballs and other attacks that
            you can escape by moving quickly.
          </li>
          <li>
            Acrobatics, Disable Device, Escape Artist, Fly, Ride, Sleight of
            Hand, and Stealth checks.
          </li>
        </ul>
      </p>
    </>
  ),
  AC: (
    <>
      <p>
        <b>Armor Class (AC)</b>
      </p>
      <p>
        Your Armor Class (AC) represents how hard it is for opponents to land a
        solid, damaging blow on you. It's the Attack Roll result that an
        opponent needs to achieve to hit you. Your AC is equal to the following:
      </p>
      <p>
        <b>
          10 + armor bonus + Shield bonus + Dexterity modifier + other modifiers
        </b>
      </p>
      <p>
        Note that armor limits your Dexterity bonus, so if you're wearing armor,
        you might not be able to apply your whole Dexterity bonus to your AC
        (see Table: Armor and Shields).
      </p>
      <p>
        Sometimes you can't use your Dexterity bonus (if you have one). If you
        can't react to a blow, you can't use your Dexterity bonus to AC. If you
        don't have a Dexterity bonus, your AC does not change.
      </p>
      <p>
        <b>Other Modifiers:</b> Many other factors modify your AC.
      </p>
      <p>
        <i>Enhancement Bonuses:</i> Enhancement bonuses apply to your armor to
        increase the armor bonus it provides.
      </p>
      <p>
        <b>Touch Attacks</b>: Some attacks completely disregard armor, including
        shields and natural armor—the aggressor need only touch a foe for such
        an attack to take full effect. In these cases, the attacker makes a
        touch Attack Roll (either ranged or melee). When you are the target of a
        touch attack, your AC doesn't include any Armor bonus, Shield bonus, or
        natural armor bonus. All other modifiers, such as your size modifier,
        Dexterity modifier, and Deflection bonus (if any) apply normally. Some
        creatures have the ability to make Incorporeal touch attacks. These
        attacks bypass solid objects, such as armor and shields, by passing
        through them. Incorporeal touch attacks work similarly to normal touch
        attacks except that they also ignore cover bonuses. Incorporeal touch
        attacks do not ignore armor bonuses granted by force effects, such as{" "}
        <i>Mage Armor</i> and <i>bracers of armor</i>.
      </p>
    </>
  ),
  str: (
    <>
      <p>
        <b>Strength (Str)</b>
      </p>
      <p>
        Strength measures muscle and physical power. This ability is important
        for those who engage in hand-to-hand (or “melee”) combat, such as
        fighters, monks, paladins, and some rangers. Strength also sets the
        maximum amount of weight your character can carry.
      </p>
      <p>
        A character with a Strength score of 0 is too weak to move in any way
        and is unconscious. Some creatures (such as incorporeal creatures) do
        not possess a Strength score and have no modifier at all to
        Strength-based skills or checks.
      </p>
      <p>
        You apply your character’s Strength modifier to:
        <ul>
          <li>Melee attack rolls.</li>
          <li>
            Damage rolls when using a melee weapon or a thrown weapon, including
            a sling. (Exceptions: Off-hand attacks receive only half the
            character’s Strength bonus, while two-handed attacks receive 1–1/2
            times the Strength bonus. A Strength penalty, but not a bonus,
            applies to attacks made with a bow that is not a composite bow.)
          </li>
          <li>Climb and Swim checks.</li>
          <li>Strength checks (for breaking down doors and the like).</li>
        </ul>
      </p>
    </>
  ),
};
Information.knowledgeDungeoneering = Information.knowledgeArcana;
Information.knowledgeEngineering = Information.knowledgeArcana;
Information.knowledgeGeography = Information.knowledgeArcana;
Information.knowledgeHistory = Information.knowledgeArcana;
Information.knowledgeLocal = Information.knowledgeArcana;
Information.knowledgeNature = Information.knowledgeArcana;
Information.knowledgeNobility = Information.knowledgeArcana;
Information.knowledgePlanes = Information.knowledgeArcana;
Information.knowledgeReligion = Information.knowledgeArcana;
export default Information;
