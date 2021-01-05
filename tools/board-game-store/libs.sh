# Feature List
nx g @nrwl/angular:lib --directory=board-game-store feature-list --routing --parentModule=apps/board-game-store/src/app/app.module.ts --lazy
nx g @nrwl/angular:component game-list --project=board-game-store-feature-list

# Feature Details
nx g @nrwl/angular:lib --directory=board-game-store feature-details --routing --parentModule=apps/board-game-store/src/app/app.module.ts --lazy
nx g @nrwl/angular:component game-details --project=board-game-store-feature-details

# Feature Cart
nx g @nrwl/angular:lib --directory=board-game-store feature-cart
nx g @nrwl/angular:component cart --project=board-game-store-feature-cart --export

# UI Formatters
nx g @nrwl/angular:lib --directory=board-game-store ui-formatters
nx g @nrwl/angular:pipe currency --project=board-game-store-ui-formatters --export
nx g @nrwl/angular:pipe rating --project=board-game-store-ui-formatters --export

# Data Access Games
nx g @nrwl/angular:lib --directory=board-game-store data-access-games
nx g @nrwl/angular:service games --project=board-game-store-data-access-games

# Data Access Cart
nx g @nrwl/angular:lib --directory=store data-access-cart
nx g @nrwl/angular:service cart --project=store-data-access-cart