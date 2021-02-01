﻿CREATE TABLE [dbo].[Spell] (
    [Id]                    INT    Primary Key        NOT NULL,
    [Name]                  NVARCHAR (36)  NULL,
    [School]                NVARCHAR (13)  NULL,
    [Subschool]             NVARCHAR (23)  NULL,
    [Descriptor]            NVARCHAR (49)  NULL,
    [Spell_Level]           NVARCHAR (213) NULL,
    [Casting_Time]          NVARCHAR (47)  NULL,
    [Components]            NVARCHAR (191) NULL,
    [Costly_Components]     INT            NULL,
    [Range]                 NVARCHAR (74)  NULL,
    [Area]                  NVARCHAR (94)  NULL,
    [Effect]                NVARCHAR (156) NULL,
    [Targets]               NVARCHAR (185) NULL,
    [Duration]              NVARCHAR (81)  NULL,
    [Dismissible]           INT            NULL,
    [Shapeable]             INT            NULL,
    [Saving_Throw]          NVARCHAR (73)  NULL,
    [Spell_Resistance]      NVARCHAR (40)  NULL,
    [Description]           NVARCHAR (MAX) NULL,
    [Description_Formatted] NVARCHAR (MAX) NULL,
    [Source]                NVARCHAR (44)  NULL,
    [Full_Text]             NVARCHAR (MAX) NULL,
    [Verbal]                NVARCHAR (226) NULL,
    [Somatic]               NVARCHAR (19)  NULL,
    [Material]              NVARCHAR (945) NULL,
    [Focus]                 INT            NULL,
    [Divine_Focus]          INT            NULL,
    [Sor]                   NVARCHAR (4)   NULL,
    [Wiz]                   NVARCHAR (4)   NULL,
    [Cleric]                NVARCHAR (4)   NULL,
    [Druid]                 NVARCHAR (4)   NULL,
    [Ranger]                NVARCHAR (4)   NULL,
    [Bard]                  NVARCHAR (4)   NULL,
    [Paladin]               NVARCHAR (4)   NULL,
    [Alchemist]             NVARCHAR (4)   NULL,
    [Summoner]              NVARCHAR (4)   NULL,
    [Witch]                 NVARCHAR (4)   NULL,
    [Inquisitor]            NVARCHAR (4)   NULL,
    [Oracle]                NVARCHAR (4)   NULL,
    [Antipaladin]           NVARCHAR (4)   NULL,
    [Magus]                 NVARCHAR (4)   NULL,
    [Adept]                 NVARCHAR (4)   NULL,
    [Deity]                 NVARCHAR (14)  NULL,
    [SLA_Level]             NVARCHAR (4)   NULL,
    [Domain]                NVARCHAR (83)  NULL,
    [Short_Description]     NVARCHAR (155) NULL,
    [Acid]                  INT            NULL,
    [Air]                   INT            NULL,
    [Chaotic]               INT            NULL,
    [Cold]                  INT            NULL,
    [Curse]                 INT            NULL,
    [Darkness]              INT            NULL,
    [Death]                 INT            NULL,
    [Disease]               INT            NULL,
    [Earth]                 INT            NULL,
    [Electricity]           INT            NULL,
    [Emotion]               INT            NULL,
    [Evil]                  INT            NULL,
    [Fear]                  INT            NULL,
    [Fire]                  INT            NULL,
    [Force]                 INT            NULL,
    [Good]                  INT            NULL,
    [Language_Dependent]    INT            NULL,
    [Lawful]                INT            NULL,
    [Light]                 INT            NULL,
    [Mind_Affecting]        INT            NULL,
    [Pain]                  INT            NULL,
    [Poison]                INT            NULL,
    [Shadow]                INT            NULL,
    [Sonic]                 INT            NULL,
    [Water]                 INT            NULL,
    [Linktext]              NVARCHAR (32)  NULL,
    [Material_Costs]        NVARCHAR (5)   NULL,
    [Bloodline]             NVARCHAR (106) NULL,
    [Patron]                NVARCHAR (58)  NULL,
    [Mythic_Text]           NVARCHAR (896) NULL,
    [Augmented]             NVARCHAR (496) NULL,
    [Mythic]                INT            NULL,
    [Bloodrager]            NVARCHAR (4)   NULL,
    [Shaman]                NVARCHAR (4)   NULL,
    [Psychic]               NVARCHAR (4)   NULL,
    [Medium]                NVARCHAR (4)   NULL,
    [Mesmerist]             NVARCHAR (4)   NULL,
    [Occultist]             NVARCHAR (4)   NULL,
    [Spiritualist]          NVARCHAR (4)   NULL,
    [Skald]                 NVARCHAR (4)   NULL,
    [Investigator]          NVARCHAR (4)   NULL,
    [Hunter]                NVARCHAR (4)   NULL,
    [Haunt_Statistics]      NVARCHAR (207) NULL,
    [Ruse]                  NVARCHAR (4)   NULL,
    [Draconic]              INT            NULL,
    [Meditative]            INT            NULL,
    [Summoner_Unchained]    NVARCHAR (6)   NULL,
    [Column_94]             NVARCHAR (4)   NULL,
    [Column_95]             NVARCHAR (4)   NULL,
    [Column_96]             NVARCHAR (4)   NULL,
    [Column_97]             NVARCHAR (4)   NULL,
    [Column_98]             NVARCHAR (4)   NULL,
    [Column_99]             INT            NULL,
    [Column_100]            INT            NULL,
    [Column_101]            INT            NULL,
    [Column_102]            INT            NULL,
    [Column_103]            INT            NULL,
    [Column_104]            INT            NULL,
    [Column_105]            INT            NULL,
    [Column_106]            INT            NULL,
    [Column_107]            INT            NULL,
    [Column_108]            INT            NULL,
    [Column_109]            INT            NULL,
    [Column_110]            INT            NULL,
    [Column_111]            INT            NULL,
    [Column_112]            INT            NULL,
    [Column_113]            INT            NULL,
    [Column_114]            INT            NULL,
    [Column_115]            INT            NULL,
    [Column_116]            INT            NULL,
    [Column_117]            INT            NULL,
    [Column_118]            INT            NULL,
    [Column_119]            INT            NULL,
    [Column_120]            INT            NULL,
    [Column_121]            INT            NULL,
    [Column_122]            INT            NULL,
    [Column_123]            INT            NULL,
    [Column_124]            INT            NULL,
    [Column_125]            INT            NULL,
    [Column_126]            INT            NULL,
    [Column_127]            INT            NULL,
    [Column_128]            NVARCHAR (4)   NULL,
    [Column_129]            INT            NULL,
    [Column_130]            NVARCHAR (4)   NULL,
    [Column_131]            INT            NULL,
    [Column_132]            INT            NULL,
    [Column_133]            INT            NULL,
    [Column_134]            INT            NULL,
    [Column_135]            INT            NULL,
    [Column_136]            NVARCHAR (4)   NULL,
    [Column_137]            NVARCHAR (4)   NULL,
    [Column_138]            INT            NULL,
    [Column_139]            NVARCHAR (4)   NULL,
    [Column_140]            NVARCHAR (4)   NULL,
    [Column_141]            NVARCHAR (4)   NULL,
    [Column_142]            NVARCHAR (4)   NULL,
    [Column_143]            NVARCHAR (4)   NULL,
    [Column_144]            NVARCHAR (4)   NULL,
    [Column_145]            NVARCHAR (4)   NULL,
    [Column_146]            INT            NULL,
    [Column_147]            INT            NULL,
    [Column_148]            INT            NULL,
    [Column_149]            INT            NULL,
    [Column_150]            NVARCHAR (4)   NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

