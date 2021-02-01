CREATE TABLE [UserProfile] (
  [Id] int PRIMARY KEY IDENTITY,
  [Email] NVARCHAR(50),
  [FirebaseUserId] NVARCHAR(50),
  [FirstName] NVARCHAR(50),
  [LastName] NVARCHAR(50),
  [DisplayName] NVARCHAR(50)
)
GO

CREATE TABLE [Sheet] (
  [Id] int PRIMARY KEY IDENTITY,
  [UserProfileId] int,
  [Name] NVARCHAR(50),
  [Alignment] NVARCHAR(50),
  [Deity] NVARCHAR(50),
  [Homeland] NVARCHAR(50),
  [Race] NVARCHAR(50),
  [Size] NVARCHAR(50),
  [Gender] NVARCHAR(50),
  [Hair] NVARCHAR(50),
  [Eyes] NVARCHAR(50),
  [ClassId] Int,
  [Height] NVARCHAR(50),
  [Age] Int,
  [Weight] Int,
  [Level] int,
  [Exp] int,
  [TNL] int,
  [HP] int,
  [MHP] int,
  [TempHP] int,
  [Str] int,
  [Dex] int,
  [Con] int,
  [Int] int,
  [Wis] int,
  [Cha] int,
  [StrMod] int,
  [DexMod] int,
  [ConMod] int,
  [IntMod] int,
  [WisMod] int,
  [ChaMod] int,
  [AC] int,
  [TouchAC] int,
  [FlatFootAC] int,
  [FortSave] int,
  [RefSave] int,
  [WillSave] int,
  [BAB] int,
  [CMB] int,
  [CMD] int,
  [Melee] int,
  [Ranged] int,
  [LandSpeed] int,
  [SwimSpeed] int,
  [ClimbSpeed] int,
  [FlySpeed] int,
  [Acrobatics] int,
  [Appraise] int,
  [Bluff] int,
  [Climb] int,
  [Craft] int,
  [Diplomacy] int,
  [DisableDevice] int,
  [Disguise] int,
  [EscapeArtist] int,
  [Fly] int,
  [HandleAnimal] int,
  [Heal] int,
  [Intimidate] int,
  [KnowledgeArcana] int,
  [KnowledgeDungeoneering] int,
  [KnowledgeEngineering] int,
  [KnowledgeGeography] int,
  [KnowledgeHistory] int,
  [KnowledgeLocal] int,
  [KnowledgeNature] int,
  [KnowledgeNobility] int,
  [KnowledgePlanes] int,
  [KnowledgeReligion] int,
  [Linguistics] int,
  [Perception] int,
  [Perform] int,
  [Profession] int,
  [Ride] int,
  [SenseMotive] int,
  [SleightOfHand] int,
  [Spellcraft] int,
  [Stealth] int,
  [Survival] int,
  [Swim] int,
  [UseMagicDevice] int,
  [SkillPoints] int,
  [Copper] int,
  [Silver] int,
  [Gold] int,
  [Plat] int,
  [Notes] nvarchar(MAX)
)
GO

CREATE TABLE [FeatSheet] (
  [Id] int PRIMARY KEY  IDENTITY,
  [SheetId] int,
  [FeatId] int
)
GO

CREATE TABLE [SpellSheet] (
  [Id] int PRIMARY KEY IDENTITY,
  [SheetId] int,
  [SpellId] int
)
GO

CREATE TABLE [Tag] (
  [Id] int PRIMARY KEY IDENTITY,
  [Name] nvarchar(255)
)
GO

CREATE TABLE [FeatTag] (
  [Id] int PRIMARY KEY,
  [FeatId] int,
  [TagId] int
)
GO

CREATE TABLE [SpellTag] (
  [Id] int PRIMARY KEY IDENTITY,
  [SpellId] int,
  [TagId] int
)
GO

CREATE TABLE [Class] (
  [Id] int PRIMARY KEY IDENTITY,
  [Name] nvarchar(255)
)
GO


CREATE TABLE [ClassTag] (
  [Id] int PRIMARY KEY IDENTITY,
  [ClassId] int,
  [TagId] int
)
GO

ALTER TABLE ClassTag
ADD FOREIGN KEY (ClassId) REFERENCES Class(Id);
ALTER TABLE ClassTag
ADD FOREIGN KEY (TagId) REFERENCES Tag(Id);
ALTER TABLE FeatTag
ADD FOREIGN KEY (FeatId) REFERENCES Feat(Id);
ALTER TABLE FeatTag
ADD FOREIGN KEY (TagId) REFERENCES Tag(Id);
ALTER TABLE Sheet
ADD FOREIGN KEY (ClassId) REFERENCES Class(Id);
ALTER TABLE Sheet
ADD FOREIGN KEY (UserProfileId) REFERENCES UserProfile(Id);
ALTER TABLE FeatSheet
ADD FOREIGN KEY (SheetId) REFERENCES Sheet(Id);
ALTER TABLE FeatSheet
ADD FOREIGN KEY (FeatId) REFERENCES Feat(Id);
ALTER TABLE SpellTag
ADD FOREIGN KEY (SpellId) REFERENCES Spell(Id);
ALTER TABLE SpellTag
ADD FOREIGN KEY (TagId) REFERENCES Tag(Id);

