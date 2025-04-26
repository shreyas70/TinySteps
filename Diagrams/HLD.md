```mermaid
%%{init: {
  'theme': 'base',
  'themeVariables': {
    'fontFamily': 'Arial, sans-serif',
    'fontSize': '14px',
    'primaryTextColor': '#2A2A2A'
  }
}}%%
flowchart TD
    %% Styling Definitions
    classDef coreComp fill:#EBF5FF,stroke:#2C5282,stroke-width:2px,color:#2D3748,font-family:Arial,font-size:14px,padding:10px;
    classDef habitComp fill:#F0FFF4,stroke:#2F855A,stroke-width:2px,color:#2D3748,font-family:Arial,font-size:14px,padding:10px;
    classDef trackComp fill:#FFFAF0,stroke:#C05621,stroke-width:2px,color:#2D3748,font-family:Arial,font-size:14px,padding:10px;
    classDef gamifyComp fill:#F9F5FF,stroke:#6B46C1,stroke-width:2px,color:#2D3748,font-family:Arial,font-size:14px,padding:10px;
    classDef uiComp fill:#F0F5FF,stroke:#3182CE,stroke-width:2px,color:#2D3748,font-family:Arial,font-size:14px,padding:10px;
    classDef userComp fill:#FFF5F5,stroke:#C53030,stroke-width:2px,color:#2D3748,font-family:Arial,font-size:14px,padding:10px,border-radius:50px;
    classDef subgraphStyle fill:#F7FAFC,stroke:#E2E8F0,stroke-width:2px,color:#4A5568,font-family:Arial,font-size:16px,font-weight:bold;

    %% Main User and Components
    User((User))
    Parent((Parent))
    
    %% Core Components Box
    subgraph CoreComponents["Core Components"]
        direction LR
        Auth[Authentication]
        Dashboard[Dashboard]
        HabitMgr[Habit Manager]
        Tracker[Tracker]
        RewardSys[Reward System]
        ParentDash[Parental Dashboard]
    end
    
    %% Habit Management Section
    subgraph HabitManagement["Habit Management"]
        direction TB
        CreateHabit[Create New Habit]
        CustomizeDetails[Customize Details]
        SetSchedule[Set Schedule]
    end
    
    %% Tracking System Section
    subgraph TrackingSystem["Tracking System"]
        direction TB
        DailyCheck[Daily Check-in]
        StreakCounter[Streak Counter]
        ProgressVis[Progress Visualization]
    end
    
    %% Gamification Section
    subgraph Gamification["Gamification"]
        direction TB
        PointSystem[Point System]
        Achievements[Achievements]
        LevelProgression[Level Progression]
        Rewards[Rewards Marketplace]
    end
    
    %% Responsive UI/UX Section
    subgraph ResponsiveUI["Responsive UI/UX"]
        direction LR
        Mobile[Mobile]
        Tablet[Tablet]
        Desktop[Desktop]
    end
    
    %% Connections between components
    User --> Auth
    Parent --> Auth
    Auth --> Dashboard
    Dashboard --> HabitMgr
    Dashboard --> Tracker
    Dashboard --> ParentDash
    Dashboard --> RewardSys
    
    %% Connections to subsystems
    HabitMgr --> HabitManagement
    Tracker --> TrackingSystem
    RewardSys --> Gamification
    
    %% Parent dashboard connections
    ParentDash --> HabitManagement
    ParentDash --> TrackingSystem
    ParentDash --> Gamification
    
    %% Additional connections showing relationships
    TrackingSystem -- "Feeds" --> Gamification
    HabitManagement -. "Motivates" .-> User
    Gamification -. "Rewards" .-> User
    Rewards -. "Approved by" .-> Parent
    
    %% UI connections
    TrackingSystem -.-> ResponsiveUI
    HabitManagement -.-> ResponsiveUI
    Gamification -.-> ResponsiveUI
    ParentDash -.-> ResponsiveUI

    %% Link Styling
    linkStyle default stroke:#4A5568,stroke-width:2px;
    
    %% Apply Classes
    class Auth,Dashboard,HabitMgr,Tracker,RewardSys,ParentDash coreComp
    class CreateHabit,CustomizeDetails,SetSchedule habitComp
    class DailyCheck,StreakCounter,ProgressVis trackComp
    class PointSystem,Achievements,LevelProgression,Rewards gamifyComp
    class Mobile,Tablet,Desktop uiComp
    class User,Parent userComp
    class CoreComponents,HabitManagement,TrackingSystem,Gamification,ResponsiveUI subgraphStyle